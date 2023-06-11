<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\GroupUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;

class GroupController extends Controller
{
    public function addGroup(Request $request)
    {
        $request->validate([
            "name" => "required|string|unique:groups,name",
        ]);
        $array = [...$request->all(), 'owner_id' => '1'];
        $group = Group::create($array);

        $group->save();
        return to_route("groups");
    }
    public function searchGroup(Request $request)
    {
        $request->validate([
            "name" => "required|string",
        ]);
        return Group::where("name", "like", "%" . $request->name . "%")->whereDoesntHave("users", function (Builder $query) {
            $query->where("user_id", "=", Auth::id());
        })->get();
    }
    public function joinGroup(Request $request, Group $group)
    {
        if (!$group->users(Auth::user())->exists())
            $group->users()->attach(Auth::user());
        return to_route("groups");
    }
    public function leaveGroup(Request $request, Group $group)
    {
        $group->users()->detach(Auth::user());
        return to_route("groups");
    }
}
