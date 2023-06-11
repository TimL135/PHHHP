<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Group extends Model
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        "owner_id",
        'is_public',
    ];
    protected $appends = [];
    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = ["pivot"];

    public function getTasksAttribute()
    {
        return $this->tasks()->get();
    }
    public function getUsersAttribute()
    {
        return $this->users()->get();
    }
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
    public function owner()
    {
        return $this->hasOne(User::class);
    }
}
