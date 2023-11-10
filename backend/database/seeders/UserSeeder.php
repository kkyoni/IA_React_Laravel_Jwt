<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::create([
            'name' => 'Users',
            'email' => 'Users@gmail.com',
            'password' => bcrypt('data@1234'),
            'user_type' => 'user',
            'status' => 'active'
        ]);
    }
}
