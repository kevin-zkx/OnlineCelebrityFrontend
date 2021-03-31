function me() {
    if (getCookie(" auths") == 0) {
        flag_edit = true;
        flag_delete = true;
        flag_export = false;
    } else if (getCookie(" auths") == 1) {
        flag_edit = true;
        flag_delete = true;
        flag_export = true;
    } else if (getCookie(" auths") == 2) {
        flag_edit = true;
        flag_delete = false;
        flag_export = false;
    } else if (getCookie(" auths") == 3) {
        flag_edit = true;
        flag_delete = false;
        flag_export = true;
    } else if (getCookie(" auths") == 4) {
        flag_edit = false;
        flag_delete = true;
        flag_export = false;
    } else if (getCookie(" auths") == 5) {
        flag_edit = false;
        flag_delete = true;
        flag_export = true;
    } else if (getCookie(" auths") == 6) {
        flag_edit = false;
        flag_delete = false;
        flag_export = false;
    } else if (getCookie(" auths") == 7) {
        flag_edit = false;
        flag_delete = false;
        flag_export = true;
    }
    return { flag_edit: flag_edit, flag_delete: flag_delete, flag_export: flag_export}
};