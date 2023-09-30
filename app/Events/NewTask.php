<?php

namespace App\Events;

use App\Models\Task;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;


class NewTask implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private Task $task;

    /**
     * Create a new event instance.
     */
    public function __construct(Task $task)
    {
        $this->task = $task;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function authorizeUser()
    {
        return (Auth::exists());
    }
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('newTask.' . $this->task->group_id),
        ];
    }
    public function broadcastAs()
    {
        return 'newTask';
    }
    public function broadcastWith()
    {
        return ["task" => $this->task];
    }
}
