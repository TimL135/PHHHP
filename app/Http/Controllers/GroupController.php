<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;

class GroupController extends Controller
{
    public function index(Request $request)
    {
        $request->validate([
            "search" => "nullable|string",
        ]);
        return Inertia::render('Groups', [
            "groups" => Auth::user()->groups()->with(["tasks", "users"])->get(),
            "searchGroups" => $request->search ?  Group::withoutUser(Auth::user())->where([["name", "like", "%" . $request->search . "%"], ["is_public", "=", "1"]])->get() : []
        ]);
    }
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
    public function joinGroup(Request $request, Group $group)
    {
        $group->users()->syncWithoutDetaching(Auth::user());
        return to_route("groups");
    }
    public function leaveGroup(Request $request, Group $group)
    {
        $group->users()->detach(Auth::user());
        return to_route("groups");
    }
    public function editSettingsGroup(Request $request, Group $group)
    {
        $request->validate([
            "name" => "required|string|unique:groups,name",
            "is_public" => "required|boolean"
        ]);
        $group->fill($request->all());
        $group->save();
        return to_route("groups");
    }
}
