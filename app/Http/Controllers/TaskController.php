<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        ]);
        $task = Task::create([...$validated, "group_id" => $group->id]);
        $group->tasks()->save($task);
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
            "worker_id" => "nullable|exists:users,id",
        ]);
        if ($group->users(Auth::user())->exists()) {
            if ($validated["done"] == true && $validated["repeat"] > 0) {
                // dd($task->toArray()["points"]);
                $oldTask = Task::create([...$task->toArray(), "done" => true]);
                $group->tasks()->save($oldTask);
                $validated["done"] = false;
            }
            $task->fill($validated);
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
