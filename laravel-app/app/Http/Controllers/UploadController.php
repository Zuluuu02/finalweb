<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image; // Ensure you have an Image model

class UploadController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'style' => 'required|string',
        ]);

        $file = $request->file('file');
        $style = $request->input('style');

        // Save the file to the public storage
        $filePath = $file->store('uploads', 'public');

        // Save file info to the database
        $image = new Image();
        $image->path = $filePath;
        $image->style = $style;
        $image->save();

        return response()->json(['success' => true, 'filePath' => $filePath, 'style' => $style]);
    }

    public function getImagesByStyle($style)
    {
        $images = Image::where('style', $style)->get();
        return response()->json($images);
    }
}
