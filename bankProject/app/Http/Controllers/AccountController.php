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
        error_log('GET');
        return Account::find($id);
    }

    function topUpAccount(Request $request) {
        error_log('POST');
        $amount = $request->amount;
        $id = $request->id;
        $account = Account::find($id);
        $account->saldo = $account->saldo + $amount;
        $account->save();
        return $account;
    }
}
