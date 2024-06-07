<?

namespace App\Http\Controllers;

use Inertia\Inertia;

class CreateController extends Controller
{
    public function index()
    {
        return Inertia::render('Create');
    }
}
