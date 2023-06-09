<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class GroupController extends Controller
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
        dd($group);
    }
}
