<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WelcomeController extends Controller
{
    /**
     * Show the welcome page.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return inertia('Welcome', [
            'auth' => [
                'user' => auth()->user(),
            ],
        ]);
    }
}
