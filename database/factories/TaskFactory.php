<?php

namespace Database\Factories;

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
            "name" => fake()->name(),
            "appoinment" => fake()->dateTime(),
            "notes" => fake()->text(),
            "title" => fake()->text(),
            "creator_id" => 1,
            "worker_id" => 1,
            "done" => fake()->boolean(),
            "group_id" => 1
        ];
    }
}
