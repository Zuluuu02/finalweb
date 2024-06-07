<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WelcomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController; 
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use App\Http\Layouts\AdminAuthLayout;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/users', function () {
    return Inertia::render('Users/UserComponent');
});

{/*Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin-dashboard', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'verified'])->name('admin.dashboard');*/}

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin-dashboard', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'verified'])->name('admin.dashboard');

Route::get('/create', function () {
    return Inertia::render('Create');
})->middleware(['auth', 'verified'])->name('create');

Route::get('/admincreate', function () {
    return Inertia::render('AdminCreate');
})->middleware(['auth', 'verified'])->name('admincreate');

Route::get('/casual', function() {
   return Inertia::render('Users/Casual'); 
});

Route::get('/semi-formal', function() {
    return Inertia::render('Users/Semi-Formal'); 
 });

 Route::get('/formal', function() {
    return Inertia::render('Users/Formal'); 
 });

 Route::get('/dress', function() {
    return Inertia::render('Users/Dress'); 
 });

 Route::get('/style', function() {
    return Inertia::render('Users/Style'); 
 });

 Route::get('/manage-users', function () {
    return Inertia::render('Users/ManageUsers')->withViewData(['layout' => 'AdminAuthLayout']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/welcome', [WelcomeController::class, 'index'])->name('welcome');

Route::post('/upload', [UploadController::class, 'store'])->name('upload');

// Dashboard routes
Route::get('/dashboard/casual', function () {
    return Inertia::render('Users/Casual'); 
})->name('dashboard.casual');

Route::get('/dashboard/semi-formal', function () {
    return Inertia::render('Users/Semi-Formal'); 
})->name('dashboard.semi-formal');

Route::get('/dashboard/formal', function () {
    return Inertia::render('Users/Formal'); 
})->name('dashboard.formal');

Route::get('/dashboard/dress', function () {
    return Inertia::render('Users/Dress'); 
})->name('dashboard.dress');

Route::get('/dashboard/style', function () {
    return Inertia::render('Users/Style'); 
})->name('dashboard.style');

Route::post('/upload', [UploadController::class, 'store'])->name('upload');
Route::get('/images/{style}', [UploadController::class, 'getImagesByStyle'])->name('images.byStyle');

Route::delete('/users/{id}', 'UserController@destroy')->name('users.destroy');

Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');