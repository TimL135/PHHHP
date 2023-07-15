<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->date("appointment")->nullable();
            $table->foreignId('creator_id')->constrained(table: 'users');
            $table->boolean("done")->default(false);
            $table->string("notes")->nullable();
            $table->unsignedInteger("repeat");
            $table->unsignedInteger("important");
            $table->unsignedInteger("points");
            $table->string("title");
            $table->foreignId('worker_id')->nullable()->constrained(table: 'users');
            $table->foreignId('group_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
