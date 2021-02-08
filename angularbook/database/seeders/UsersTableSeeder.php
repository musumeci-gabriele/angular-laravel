<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

// * importare la classe User e Faker
use App\Models\User;
use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
{
    $faker = Faker::create();
    $usersPsw = array(
        "demodemo",
        "123456",
        "testtest"
    );

    foreach($usersPsw as $userPsw)
    {

        User::create([
            'name' => $faker->firstName .' '. $faker->lastName ,
            'email' => $content = $faker->email,
            'password' => $userPsw
        ]);
    }
}
}
