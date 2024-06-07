<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Upload;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $uploads = Upload::all();
        return Inertia::render('Dashboard', [
            'uploads' => $uploads
        ]);
    }
}
