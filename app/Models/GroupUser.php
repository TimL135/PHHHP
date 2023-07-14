<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class GroupUser extends Model
{
    use HasFactory, Notifiable;
    protected $table = "group_user";
    protected $with = ["user"];
    protected $hidden = ["created_at", "updated_at", "user_id", "group_id"];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function group()
    {
        return $this->belongsTo(Group::class);
    }
    public function getIsAdminAttribute()
    {
        return $this->attributes["is_admin"] == 1 || $this->group->owner_id == $this->id;
    }
}
