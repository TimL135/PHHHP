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
        $request->validate([
            "appointment" => "nullable|string",
            "creator_id" => "required|exists:users,id",
            "done" => "required|boolean",
            "notes" => "nullable|string",
            "repeat" => "required|numeric",
            "title" => "required|string",
            "worker_id" => "nullable|exists:users,id",
        ]);
        $task = Task::create([...$request->all(), "group_id" => $group->id]);
        $group->tasks()->save($task);
        return to_route("groups");
    }
    public function editTask(Request $request, Group $group, Task $task)
    {
        $request->validate([
            "appointment" => "nullable|string",
            "done" => "required|boolean",
            "notes" => "nullable|string",
            "repeat" => "required|numeric",
            "title" => "required|string",
            "worker_id" => "nullable|exists:users,id",
        ]);
        if ($group->users(Auth::user())->exists())
            $task->fill($request->all());
        $task->save();
        return to_route("groups");
    }
    public function deleteTask(Request $request, Task $task)
    {
        $task->delete();
        return to_route("groups");
    }
}
