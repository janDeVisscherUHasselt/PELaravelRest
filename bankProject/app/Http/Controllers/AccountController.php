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
        return Account::find($id);
    }

    function topUpAccount(Request $request) {
        $amount = $request->amount;
        $id = $request->id;
        $account = Account::find($id);
        $account->saldo = $account->saldo + $amount;
        $account->save();
      
        return $account;
    }
}
