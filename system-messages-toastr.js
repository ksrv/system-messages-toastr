
import {SysMessages} from 'meteor/ksrv:system-messages';
import 'meteor/chrismbeckett:toastr';

SysMessages.after.insert(function(userId, message){
    if(toastr && toastr[message.type]){
        toastr[message.type](message.text, message.title, { progressBar: true });
    }
});