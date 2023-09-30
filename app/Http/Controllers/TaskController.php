<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Arr;

class TaskController extends Controller
{
    public function addTask(Request $request, Group $group)
    {
        $validated = $request->validate([
            "appointment" => "nullable|string",
            "creator_id" => "required|exists:users,id",
            "done" => "required|boolean",
            "notes" => "nullable|string",
            "repeat" => "required|numeric",
            "title" => "required|string",
            "worker_id" => "nullable|exists:users,id",
            "important" => "required|Integer"
        ]);

        if ($group->scopeUser(Auth::user())->is_admin) {
            $validated = Arr::collapse([$validated, $request->validate([
                "points" => "required|numeric",
            ])]);
        } else {
            $validated = Arr::collapse([$validated, [
                "points" => 0,
            ]]);
        }

        $task = Task::create([...$validated, "group_id" => $group->id]);
        $group->tasks()->save($task);
        event(new \App\Events\NewTask($task));
        return to_route("groups");
    }
    public function editTask(Request $request, Group $group, Task $task)
    {
        $validated  = $request->validate([
            "appointment" => "required|string",
            "done" => "required|boolean",
            "notes" => "nullable|string",
            "repeat" => "required|numeric",
            "title" => "required|string",
        ]);

        if ($group->scopeUser(Auth::user())->is_admin) {
            $validated = Arr::collapse([$validated, $request->validate([
                "points" => "required|numeric",
            ])]);
        }
        if ($group->scopeUser(Auth::user())->is_admin || $task->done == 0 || $validated["done"] == 0) {
            $validated = Arr::collapse([$validated, $request->validate([
                "worker_id" => "nullable|exists:users,id",
            ])]);
        }

        if ($group->users(Auth::user())->exists()) {
            $appointment = $task->appointment;
            $task->fill($validated);
            if ($validated["done"] == true && $validated["repeat"] > 0) {
                $oldTask = Task::create([...$task->toArray(), "done" => true, "appointment" => $appointment]);
                $group->tasks()->save($oldTask);
                $task->done = false;
            }

            $task->save();
        }
        return to_route("groups");
    }
    public function deleteTask(Request $request, Task $task)
    {
        $task->delete();
        return to_route("groups");
    }
}
