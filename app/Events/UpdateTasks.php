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


class UpdateTasks implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private Task $task;
    private string $action;

    /**
     * Create a new event instance.
     */
    public function __construct(Task $task, string $action)
    {
        $this->task = $task;
        $this->action = $action;
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
            new PrivateChannel('updateTasks.' . $this->task->group_id),
        ];
    }
    public function broadcastAs()
    {
        return 'newTask';
    }
    public function broadcastWith()
    {
        return [$this->action => $this->task];
    }
}
