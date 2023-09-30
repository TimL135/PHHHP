<?php

namespace Database\Factories;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "notes" => fake()->text(),
            "title" => fake()->text(),
            "creator_id" => 1,
            "worker_id" => 1,
            "done" => 0,
            "group_id" => 1,
            "appointment" => Carbon::now(),
            "repeat" => 1,
            "points" => fake()->numberBetween(1, 100),
            "important" => fake()->numberBetween(0, 3)
        ];
    }
}
