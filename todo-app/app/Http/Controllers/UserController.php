<?php

namespace App\Http\Controllers;

use App\Models\User; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Session;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $tasks = DB::table('todo')->get();
        return Inertia::render('User', ['todo' => $tasks]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $task = new user();
        $data = array(
            'task' => $request -> input('task')
        );

        $task -> create($data);
        Session::flash('success','Task created successfully');
        return redirect('/');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $tasks = User::find($id); 
        return Inertia::render('Edit', ['todo' => $tasks]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tasks = User::findOrFail($id);
        $tasks -> task = $request->input('task');
        $tasks->save();
        Session::flash('success','Task updated created successfully');
        return redirect('/');
    }

    public function updateStatus(Request $request, $id)
    {
        $tasks = User::findOrFail($id);
        $tasks -> status = "done";
        $tasks->save();
        Session::flash('success','Task finished');
        return redirect('/');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tasks = User::findOrFail($id);
        $tasks -> delete();
        Session::flash('success','Task deleted created successfully');
        return redirect('/');
        //
    }
}
