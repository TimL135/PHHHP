<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Task extends Model
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'appointment',
        'creator_id',
        'done',
        'notes',
        'repeat',
        'title',
        'worker_id',
        'group_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    public function group()
    {
        return $this->hasOne(Group::class);
    }
    public function worker()
    {
        return $this->hasOne(User::class);
    }
    public function creator()
    {
        return $this->hasOne(User::class);
    }
}
