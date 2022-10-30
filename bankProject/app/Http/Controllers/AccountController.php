<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Account;

class AccountController extends Controller
{
    //
    function allAccounts() {
        return Account::all();
    }

    function getAccount($id){
        return Account::all()->find($id);
    }
}
