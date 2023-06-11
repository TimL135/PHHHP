<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            "password" => Hash::make("admin"),
        ]);
        \App\Models\Group::factory()->create([
            'owner_id' => 1,
            'is_public' => true,
        ]);
        \App\Models\Group::factory()->create([
            'owner_id' => 1,
            'is_public' => true,
        ]);
        \App\Models\Task::factory()->create([
            "title" => "Test Task",
            "notes" => "Test Notes",

        ]);
        \App\Models\GroupUser::factory()->create([
            'user_id' => 1,
            'group_id' => 1,
        ]);
        \App\Models\GroupUser::factory()->create([
            'user_id' => 1,
            'group_id' => 2,
        ]);
    }
}
