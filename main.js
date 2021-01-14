(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+fTq":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/container/task-list-container/task-list-container.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TaskListContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListContainerComponent", function() { return TaskListContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ "2MiI");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");






class TaskListContainerComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TaskListContainerComponent.ɵfac = function TaskListContainerComponent_Factory(t) { return new (t || TaskListContainerComponent)(); };
TaskListContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskListContainerComponent, selectors: [["app-task-list-container"]], decls: 5, vars: 0, consts: [["id", "container"]], template: function TaskListContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["#container[_ngcontent-%COMP%]{\n  background-color: #F2EDF3;\n  height: calc(100vh - 50px); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1saXN0LWNvbnRhaW5lci90YXNrLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCLEVBQUUsZ0JBQWdCO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1saXN0LWNvbnRhaW5lci90YXNrLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFREYzO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTsgLyo1MHB4ID0gaGVhZGVyKi9cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-list-container',
                templateUrl: './task-list-container.component.html',
                styleUrls: ['./task-list-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\boardy2\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0jXk":
/*!*******************************************!*\
  !*** ./src/app/model/enum/status.enum.ts ***!
  \*******************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status;
(function (Status) {
    Status["free"] = "FREE";
    Status["in_progress"] = "PROGRESS";
    Status["done"] = "DONE";
    Status["to_test"] = "TO TEST";
})(Status || (Status = {}));


/***/ }),

/***/ "1d0G":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 1, vars: 0, consts: [["id", "container"]], template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["#container[_ngcontent-%COMP%]{\n    background-color: #F2EDF3;\n    height: calc(100vh - 50px); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCLEVBQUUsZ0JBQWdCO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkVERjM7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7IC8qNTBweCA9IGhlYWRlciovXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-container',
                templateUrl: './container.component.html',
                styleUrls: ['./container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_auth_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/auth-state.service */ "WlYd");
/* harmony import */ var src_app_shared_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/token.service */ "5WFb");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HeaderComponent {
    constructor(auth, token, userService, router) {
        this.auth = auth;
        this.token = token;
        this.userService = userService;
        this.router = router;
        this.openMenu = false;
    }
    ngOnInit() {
        this.userService.getUser().subscribe(result => {
            if (result) {
                this.userName = result.name;
            }
        });
        document.getElementsByTagName("body")[0].classList.remove("openMenu");
    }
    goHome() {
        this.router.navigate(['dashboard']);
    }
    doLogout() {
        this.auth.setAuthState(false);
        this.token.removeToken();
    }
    showHideMenu() {
        this.openMenu ? this.openMenu = false : this.openMenu = true;
        document.getElementsByTagName("body")[0].classList.toggle("openMenu");
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_auth_state_service__WEBPACK_IMPORTED_MODULE_1__["AuthStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 13, vars: 4, consts: [["id", "header-content"], [3, "click"], [1, "bar1"], [1, "bar2"], [1, "bar3"], ["id", "title"], ["id", "signout-container"], ["routerLink", "/sign-in", 3, "click"], [1, "fa", "fa-power-off"], ["id", "userName"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() { return ctx.showHideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_b_click_6_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Boardy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.doLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menu ", ctx.openMenu ? "open" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["#title[_ngcontent-%COMP%] {\n    color: #7215d8;\n    font-size: xx-large;\n    padding: 5px 5px 5px 30px;\n}\n\n#header-content[_ngcontent-%COMP%] {\n    height: 50px;\n    display: inline-block;\n    width: 100%;\n}\n\n.fa-power-off[_ngcontent-%COMP%] {\n    color: grey;\n}\n\n.fa[_ngcontent-%COMP%] {\n    font-size: 30px;\n}\n\n#signout-container[_ngcontent-%COMP%] {\n    display: inline;\n    float: right;\n    margin-top: 10px;\n    margin-right: 10px;\n}\n\n#signout-container[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n#userName[_ngcontent-%COMP%] {\n    display: inline;\n    float: right;\n    margin-top: 12px;\n    margin-right: 12px;\n}\n\nb[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.menu[_ngcontent-%COMP%] {\n    float:left;\n    cursor: pointer;\n    padding: 5px 5px 5px 12px;\n}\n\n.menu[_ngcontent-%COMP%]:hover   .bar1[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]:hover   .bar2[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]:hover   .bar3[_ngcontent-%COMP%] {\n    background-color: #7215d8;\n}\n\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 5px;\n    background-color: #4d4c4c;\n    margin: 6px 0;\n    transition: 0.4s;\n}\n\n\n\n.open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n    transform: rotate(-45deg) translate(-9px, 6px) ;\n}\n\n\n\n.open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n    opacity: 0;\n}\n\n\n\n.open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n    transform: rotate(45deg) translate(-8px, -8px) ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVFLHFCQUFxQjs7QUFDdkI7SUFFSSwrQ0FBK0M7QUFDbkQ7O0FBRUUsNEJBQTRCOztBQUM5QjtJQUNJLFVBQVU7QUFDZDs7QUFFRSxvQkFBb0I7O0FBQ3RCO0lBRUksK0NBQStDO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGUge1xuICAgIGNvbG9yOiAjNzIxNWQ4O1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMzBweDtcbn1cblxuI2hlYWRlci1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmEtcG93ZXItb2ZmIHtcbiAgICBjb2xvcjogZ3JleTtcbn1cblxuLmZhIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cbiNzaWdub3V0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuI3NpZ25vdXQtY29udGFpbmVyOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiN1c2VyTmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuYjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudSB7XG4gICAgZmxvYXQ6bGVmdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTJweDtcbn1cblxuLm1lbnU6aG92ZXIgLmJhcjEsIC5tZW51OmhvdmVyIC5iYXIyLCAubWVudTpob3ZlciAuYmFyMyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMTVkODtcbn1cbiAgXG4uYmFyMSwgLmJhcjIsIC5iYXIzIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0YzRjO1xuICAgIG1hcmdpbjogNnB4IDA7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cbiAgXG4gIC8qIFJvdGF0ZSBmaXJzdCBiYXIgKi9cbi5vcGVuIC5iYXIxIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCkgO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCkgO1xufVxuICBcbiAgLyogRmFkZSBvdXQgdGhlIHNlY29uZCBiYXIgKi9cbi5vcGVuIC5iYXIyIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuICBcbiAgLyogUm90YXRlIGxhc3QgYmFyICovXG4ub3BlbiAuYmFyMyB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpIDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpIDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_shared_auth_state_service__WEBPACK_IMPORTED_MODULE_1__["AuthStateService"] }, { type: src_app_shared_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "4s7H":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/container/team-list-container/team-list/team-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TeamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListComponent", function() { return TeamListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_team_member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/team-member */ "lIHx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/team.service */ "mqDS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function TeamListComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_tr_15_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const person_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.showPersonDetail(person_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", person_r3.rank, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", person_r3.avg_task_priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.priority[person_r3.avg_task_priority]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r3.avg_time ? person_r3.avg_time : "\u00A0");
} }
function TeamListComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TeamListComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamListComponent_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TeamListComponent {
    constructor(router, activatedRoute, teamService, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.teamService = teamService;
        this.titleService = titleService;
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__["Priority"];
        this.pagination = {
            prev: "",
            next: ""
        };
    }
    ngOnInit() {
        this.teamService.getTeamMembers().subscribe(result => {
            this.mapData(result);
        });
        this.titleService.setTitle("Team");
    }
    showPersonDetail(id) {
        this.router.navigate(['person-detail'], { queryParams: { id: id }, relativeTo: this.activatedRoute });
    }
    mapData(result) {
        this.team = result.data.map(val => new src_app_model_team_member__WEBPACK_IMPORTED_MODULE_2__["TeamMember"](val));
        this.pagination.prev = result.links.prev;
        this.pagination.next = result.links.next;
    }
    prevPage() {
        this.teamService.getPage(this.pagination.prev).subscribe(result => {
            this.mapData(result);
        });
    }
    nextPage() {
        this.teamService.getPage(this.pagination.next).subscribe(result => {
            this.mapData(result);
        });
    }
    onScroll(event) {
        event.target.getElementsByTagName("thead")[0].scrollLeft = event.target.scrollLeft;
    }
}
TeamListComponent.ɵfac = function TeamListComponent_Factory(t) { return new (t || TeamListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
TeamListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamListComponent, selectors: [["app-team-list"]], decls: 20, vars: 3, consts: [["id", "team-list-container"], [1, "team-table", 3, "scroll"], ["class", "team-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-links"], [3, "click", 4, "ngIf"], [1, "team-table-item", 3, "click"], [3, "click"]], template: function TeamListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TeamListComponent_Template_table_scroll_3_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Average task priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Average time on task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TeamListComponent_tr_15_Template, 11, 7, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TeamListComponent_a_18_Template, 4, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TeamListComponent_a_19_Template, 4, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.prev != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.next != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".team-table[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-top: 28px;\n    height: calc(100% - 30px - 124px);\n    width: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\nthead[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: -28px;\n    display: inline-block;\n    width: calc(100% - 200px - 62px);\n    background-color: white;\n}\n\ntbody[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n}\n\n.team-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px 0 20px 0;\n    display: inline-block;\n    width: 25%;\n}\n\n.team-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n}\n\n.team-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #dddddd;\n}\n\n.team-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #dddddd;\n}\n\n.team-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 25%;\n    \n}\n\nh2[_ngcontent-%COMP%] {\n    margin: 20px 40px 20px 40px;\n    float: left;\n}\n\n.task-table-status[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 7px;\n    border-radius: 10px;\n    color: white;\n    text-transform: uppercase;\n}\n\n#team-list-container[_ngcontent-%COMP%] {\n    display: block;\n    margin: 30px 30px 30px 30px;\n    height: calc(100% - 60px);\n    border: 1px solid #dddddd;\n    border-radius: 20px;\n    background-color: white;\n}\n\n.team-table-item[_ngcontent-%COMP%]:hover {\n    background-color: #f7f8f9;\n    cursor: pointer;\n}\n\n.pagination-links[_ngcontent-%COMP%] {\n    margin: auto;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #7215d8;\n    float: left;\n    padding: 2px 16px 8px 16px;\n    text-decoration: none;\n    font-size: x-large;\n    transition: background-color .3s;\n  }\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: large;\n  }\n\n@media screen and (max-width: 1024px) {\n\n    thead[_ngcontent-%COMP%] {\n        width: calc(100% - 32px) !important;\n        overflow: hidden;\n    }\n  \n    .team-table[_ngcontent-%COMP%]{\n        overflow-x: auto;\n        height: calc(100% - 30px - 113px);\n    }\n  \n    tr[_ngcontent-%COMP%] {\n        min-width: 500px;\n    }\n\n    #team-list-container[_ngcontent-%COMP%] {\n        height: calc(100% - 45px);\n        margin: 15px 15px 30px 15px;\n    }\n\n    h2[_ngcontent-%COMP%] {\n        margin: 15px 30px 15px 30px;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGVhbS1saXN0LWNvbnRhaW5lci90ZWFtLWxpc3QvdGVhbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7O0lBRUU7UUFDSSxtQ0FBbUM7UUFDbkMsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci90ZWFtLWxpc3QtY29udGFpbmVyL3RlYW0tbGlzdC90ZWFtLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtLXRhYmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAxMjRweCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbnRoZWFkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCAtIDYycHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG50Ym9keSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGVhbS10YWJsZSB0ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi50ZWFtLXRhYmxlIHRyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVhbS10YWJsZSB0Ym9keSB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi50ZWFtLXRhYmxlIHRoZWFkIHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZDtcbn1cblxuLnRlYW0tdGFibGUgdGgge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjUlO1xuICAgIFxufVxuXG5oMiB7XG4gICAgbWFyZ2luOiAyMHB4IDQwcHggMjBweCA0MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udGFzay10YWJsZS1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwIDdweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jdGVhbS1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAzMHB4IDMwcHggMzBweCAzMHB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGVhbS10YWJsZS1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBhZ2luYXRpb24tbGlua3Mge1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnBhZ2luYXRpb24gYTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgICBjb2xvcjogIzcyMTVkODtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAycHggMTZweCA4cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xuICB9XG4gIFxuICAucGFnaW5hdGlvbiBhIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcblxuICAgIHRoZWFkIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICBcbiAgICAudGVhbS10YWJsZXtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4IC0gMTEzcHgpO1xuICAgIH1cbiAgXG4gICAgdHIge1xuICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgICN0ZWFtLWxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDE1cHggMzBweCAxNXB4O1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuICAgIH1cblxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-list',
                templateUrl: './team-list.component.html',
                styleUrls: ['./team-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_4__["TeamService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }]; }, null); })();


/***/ }),

/***/ "5Ey6":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/auth.service */ "QNcV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SignupComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errors == null ? null : ctx_r0.errors.email, " ");
} }
function SignupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errors == null ? null : ctx_r1.errors.password, " ");
} }
function SignupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errors == null ? null : ctx_r2.errors.error, " ");
} }
class SignupComponent {
    constructor(router, fb, authService, titleService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.titleService = titleService;
        this.errors = null;
        this.registerForm = this.fb.group({
            name: [''],
            email: [''],
            password: [''],
            password_confirmation: ['']
        });
    }
    ngOnInit() {
        this.titleService.setTitle("New account");
    }
    onSubmit() {
        this.authService.register(this.registerForm.value).subscribe(result => {
            console.log(result);
        }, error => {
            this.errors = error.error;
        }, () => {
            this.registerForm.reset();
            this.router.navigate(['/sign-in']);
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 23, vars: 4, consts: [["id", "auth-wrapper"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["id", "title"], [1, "form-item"], [1, "fa", "fa-user", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "name", "type", "text", "placeholder", "name", 1, "form-control"], [1, "fa", "fa-at", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "email", "type", "text", "placeholder", "email", 1, "form-control"], [1, "fa", "fa-lock", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "password", "type", "password", "placeholder", "password", 1, "form-control"], ["formControlName", "password_confirmation", "type", "password", "placeholder", "confirm password", 1, "form-control"], ["id", "submit-button", "type", "submit", 1, "btn", "btn-block", "btn-primary"], ["routerLink", "/sign-in"], [1, "alert", "alert-danger", "mt-3"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SignupComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Boardy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Already have an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#auth-wrapper[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 30%;\n    \n    padding: 30px;\n    height: 50vh;\n}\n\nform[_ngcontent-%COMP%] {\n    display: grid;\n    justify-content: center;\n}\n\ninput[_ngcontent-%COMP%] {\n    border: none;\n    border-bottom: solid 1px gray;\n    background: none;\n    margin-left: 5px;\n}\n\n#title[_ngcontent-%COMP%] {\n    margin: auto;\n    color: #7215d8;\n    font-size: xx-large;\n    margin-bottom: 30px;\n}\n\n#submit-button[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    background-color: #7215d8;\n    border: none;\n}\n\na[_ngcontent-%COMP%] {\n    margin: auto;\n    font-size: smaller;\n    color: darkslategrey;\n}\n\ndiv[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdXRoLXdyYXBwZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMzAlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGMkVERjM7ICovXG4gICAgcGFkZGluZzogMzBweDtcbiAgICBoZWlnaHQ6IDUwdmg7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyYXk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4jdGl0bGUge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBjb2xvcjogIzcyMTVkODtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNzdWJtaXQtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjE1ZDg7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5hIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xufVxuXG5kaXYgLmZvcm0taXRlbSB7XG4gICAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


/***/ }),

/***/ "5WFb":
/*!*****************************************!*\
  !*** ./src/app/shared/token.service.ts ***!
  \*****************************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenService {
    constructor() {
        this.issuer = {
            login: 'http://notabot.duckdns.org:32768/api/auth/login',
            register: 'http://notabot.duckdns.org:32768/api/auth/register'
        };
    }
    handleData(token) {
        localStorage.setItem('auth_token', token);
    }
    getToken() {
        return localStorage.getItem('auth_token');
    }
    // Verify the token
    isValidToken() {
        const token = this.getToken();
        if (token) {
            const payload = this.payload(token);
            if (payload) {
                return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
            }
        }
        else {
            return false;
        }
    }
    payload(token) {
        const jwtPayload = token.split('.')[1];
        return JSON.parse(atob(jwtPayload));
    }
    // User state based on valid token
    isLoggedIn() {
        return this.isValidToken();
    }
    // Remove token
    removeToken() {
        localStorage.removeItem('auth_token');
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(); };
TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7p+m":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/container/task-list-container/task-list-item/task-list-item.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TaskListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListItemComponent", function() { return TaskListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TaskListItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
TaskListItemComponent.ɵfac = function TaskListItemComponent_Factory(t) { return new (t || TaskListItemComponent)(); };
TaskListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskListItemComponent, selectors: [["app-task-list-item"]], inputs: { task: "task" }, decls: 0, vars: 0, template: function TaskListItemComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL3Rhc2stbGlzdC1jb250YWluZXIvdGFzay1saXN0LWl0ZW0vdGFzay1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-list-item',
                templateUrl: './task-list-item.component.html',
                styleUrls: ['./task-list-item.component.css']
            }]
    }], function () { return []; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AEEF":
/*!*******************************!*\
  !*** ./src/app/model/task.ts ***!
  \*******************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
    constructor(data) {
        var _a, _b;
        this.client_id = 0;
        this.id = data.id;
        this.title = data.title;
        this.estimate = data.estimate;
        this.description = data.description;
        this.status = data.status;
        this.priority = data.priority;
        this.rank = data.rank;
        this.deadline = data.deadline;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.finished_at = data.finished_at;
        this.client_id = data.client_id;
        this.creator = data.creator;
        this.assignee = data.assignee;
        this.parent_id = data.parent_id;
        this.subTasks = (_a = data.subTasks) === null || _a === void 0 ? void 0 : _a.map(val => new Task(val));
        this.comments = (_b = data.comments) === null || _b === void 0 ? void 0 : _b.map(val => new Comment(val));
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "G5JQ":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/container/task-list-container/task-list/task-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/enum/status.enum */ "0jXk");
/* harmony import */ var src_app_model_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/task */ "AEEF");
/* harmony import */ var src_app_model_team_member__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/team-member */ "lIHx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/team.service */ "mqDS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function TaskListComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", member_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r4.name, " ");
} }
function TaskListComponent_tr_76_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function TaskListComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_tr_76_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const task_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showTaskDetail(task_r5 == null ? null : task_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskListComponent_tr_76_ng_template_9_Template, 1, 0, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r5 == null ? null : task_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", task_r5 == null ? null : task_r5.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.status[task_r5 == null ? null : task_r5.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((task_r5 == null ? null : task_r5.assignee == null ? null : task_r5.assignee.name) ? task_r5 == null ? null : task_r5.assignee == null ? null : task_r5.assignee.name : "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r5 == null ? null : task_r5.deadline.split(" ")[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r5.estimate, " hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", task_r5 == null ? null : task_r5.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.priority[task_r5 == null ? null : task_r5.priority]);
} }
function TaskListComponent_a_79_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_a_79_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_a_80_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_a_80_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { "task-filter": true, "hidden": a1 }; };
const _c1 = function (a1) { return { "task-table": true, "task-table-filter": a1 }; };
class TaskListComponent {
    constructor(router, activatedRoute, taskService, teamService, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.taskService = taskService;
        this.teamService = teamService;
        this.titleService = titleService;
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__["Priority"];
        this.status = src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__["Status"];
        this.pagination = {
            prev: "",
            next: ""
        };
        this.showFilter = false;
        this.filter = {
            prio: "",
            status: "",
            assignee: ""
        };
    }
    ngOnInit() {
        this.taskService.getTasks().subscribe(result => {
            this.mapData(result);
        });
        this.teamService.getAllTeamMembers().subscribe(result => {
            this.team = result.data.map(val => new src_app_model_team_member__WEBPACK_IMPORTED_MODULE_4__["TeamMember"](val));
        });
        this.titleService.setTitle("Task list");
    }
    mapData(result) {
        this.tasks = result.data.map(val => new src_app_model_task__WEBPACK_IMPORTED_MODULE_3__["Task"](val));
        this.filteredTasks = this.tasks;
        let filter = (this.filter.prio ? "&priority[]=" + this.filter.prio : "") +
            (this.filter.status ? "&status[]=" + this.filter.status : "") +
            (this.filter.assignee ? "&assignee[]=" + this.filter.assignee : "");
        this.pagination.prev = result.links.prev ? result.links.prev + filter : result.links.prev;
        this.pagination.next = result.links.next ? result.links.next + filter : result.links.next;
    }
    showHideFilter() {
        if (this.showFilter) {
            this.showFilter = false;
            return;
        }
        this.showFilter = true;
    }
    onCustomFilter(value) {
        this.filter.status = value;
        this.filterTasks();
    }
    onFilter(target) {
        let wasChange = false;
        switch (target.id) {
            case "task-filter-prio":
                if (this.filter.prio != target.value) {
                    wasChange = true;
                }
                this.filter.prio = target.value;
                break;
            case "task-filter-status":
                if (this.filter.status != target.value) {
                    wasChange = true;
                }
                this.filter.status = target.value;
                break;
            case "task-filter-assignee":
                if (this.filter.assignee != target.value) {
                    wasChange = true;
                }
                this.filter.assignee = target.value;
        }
        if (wasChange) {
            this.filterTasks();
        }
    }
    filterTasks() {
        let filter = {
            "priority[]": (this.filter.prio && this.filter.prio != "" ? this.filter.prio : undefined),
            "status[]": (this.filter.status && this.filter.status != "" ? this.filter.status : undefined),
            "assignee[]": (this.filter.assignee && this.filter.assignee != "" ? this.filter.assignee : undefined),
        };
        this.taskService.filterTask(JSON.parse(JSON.stringify(filter))).subscribe(result => {
            this.mapData(result);
        });
    }
    showTaskDetail(id) {
        this.router.navigate(['task-detail'], { queryParams: { id: id }, relativeTo: this.activatedRoute });
    }
    addTask() {
        this.router.navigate(['new-task'], { relativeTo: this.activatedRoute });
    }
    prevPage() {
        this.taskService.getPage(this.pagination.prev).subscribe(result => {
            this.mapData(result);
        });
    }
    nextPage() {
        this.taskService.getPage(this.pagination.next).subscribe(result => {
            this.mapData(result);
        });
    }
    onScroll(event) {
        event.target.getElementsByTagName("thead")[0].scrollLeft = event.target.scrollLeft;
    }
}
TaskListComponent.ɵfac = function TaskListComponent_Factory(t) { return new (t || TaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"])); };
TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 81, vars: 10, consts: [[1, "right-button-container"], [1, "add-button", 3, "click"], ["id", "task-list-container"], [1, "task-filter-button", 3, "click"], [1, "common-filters_container"], ["type", "radio", "id", "all", "value", "", "name", "status", "checked", "", 3, "change"], ["for", "all", 1, "radio-label"], ["type", "radio", "id", "free", "value", "free", "name", "status", 1, "radio-button", 3, "change"], ["for", "free", 1, "radio-label"], ["type", "radio", "id", "in-progress", "value", "in_progress", "name", "status", 1, "radio-button", 3, "change"], ["for", "in-progress", 1, "radio-label"], ["type", "radio", "id", "test", "value", "to_test", "name", "status", 1, "radio-button", 3, "change"], ["for", "test", 1, "radio-label"], ["type", "radio", "id", "done", "value", "done", "name", "status", 1, "radio-button", 3, "change"], ["for", "done", 1, "radio-label"], [3, "ngClass"], [1, "task-filter-option"], ["for", "task-filter-prio"], ["id", "task-filter-prio", 3, "change"], ["value", ""], ["value", "low"], ["value", "medium"], ["value", "high"], ["for", "task-filter-assignee"], ["id", "task-filter-assignee", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "task-filter-status"], ["id", "task-filter-status", 3, "change"], ["value", "free"], ["value", "in_progress"], ["value", "to_test"], ["value", "done"], [3, "ngClass", "scroll"], ["class", "task-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-links"], [3, "click", 4, "ngIf"], [3, "value"], [1, "task-table-item", 3, "click"], [1, "task-table-title"], ["empty", ""], [1, "task-table-deadline"], [3, "click"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_button_click_1_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " + Add task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "All tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_Template_div_click_6_listener() { return ctx.showHideFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_input_change_10_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_input_change_13_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_input_change_16_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "In progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_input_change_19_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "To test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_input_change_22_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_select_change_30_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "MEDIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_select_change_43_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TaskListComponent_option_46_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_select_change_51_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "FREE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "IN PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "TO TEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TaskListComponent_Template_table_scroll_62_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Deadline/Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, TaskListComponent_tr_76_Template, 18, 12, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, TaskListComponent_a_79_Template, 4, 0, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, TaskListComponent_a_80_Template, 4, 0, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.showFilter === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.showFilter === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.prev != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.next != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: [".task-table[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: calc(100% - 30px - 124px - 30px);\n    margin-top: 28px;\n    width: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.task-table-filter[_ngcontent-%COMP%] {\n    height: calc(100% - 30px - 200px);\n}\n\nthead[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: -28px;\n    display: inline-block;\n    width: calc(100% - 200px - 62px);\n    background-color: white;\n}\n\ntbody[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n}\n\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px 0 20px 0;\n    display: inline-block;\n    width: 20%;\n}\n\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n}\n\n.task-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #dddddd;\n}\n\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #dddddd;\n}\n\n.task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 20%;\n}\n\nh2[_ngcontent-%COMP%] {\n    margin: 20px 40px 20px 40px;\n    float: left;\n}\n\n.task-filter-button[_ngcontent-%COMP%] {\n    float: right;\n    margin: 20px 20px 20px 20px;\n    cursor: pointer;\n    color: #7215d8;\n    font-weight: bold;\n}\n\n.task-filter[_ngcontent-%COMP%] {\n    float: left;\n    width: calc(100% - 80px);\n    margin: 0 40px 0 40px;\n    padding: 0 0 20px 0;\n}\n\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.task-filter-option[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 40px;\n}\n\n.task-table-status[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 7px;\n    border-radius: 10px;\n    color: white;\n    text-transform: uppercase;\n}\n\n.task-table-item[_ngcontent-%COMP%]:hover {\n    background-color: #f7f8f9;\n    cursor: pointer;\n}\n\n.task-table-title[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-left: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first {\n    text-align: left !important;\n}\n\n.right-button-container[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.add-button[_ngcontent-%COMP%] {\n    margin: 10px 30px 10px 10px;\n    background-color: #7215d8;\n    border: none;\n    color: white;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    outline: none;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #7215d8;\n    float: left;\n    padding: 2px 16px 8px 16px;\n    text-decoration: none;\n    font-size: x-large;\n    transition: background-color .3s;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: large;\n}\n\n#task-list-container[_ngcontent-%COMP%] {\n    display: block;\n    margin: 0 30px 30px 30px;\n    height: calc(100% - 30px - 48px);\n    border: 1px solid #dddddd;\n    border-radius: 20px;\n    background-color: white;\n}\n\n.pagination-links[_ngcontent-%COMP%] {\n    margin: auto;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.task-table-deadline[_ngcontent-%COMP%] {\n    padding: 0 !important;\n}\n\n.common-filters_container[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    margin-left: 30px;\n}\n\n.radio-label[_ngcontent-%COMP%] {\n    margin-left: 5px;\n}\n\n.radio-button[_ngcontent-%COMP%] {\n    margin-left: 15px;\n}\n\n@media screen and (max-width: 1024px) {\n    thead[_ngcontent-%COMP%] {\n        width: calc(100% - 32px) !important;\n        overflow: hidden;\n    }\n    .task-table[_ngcontent-%COMP%] {\n        overflow-x: auto;\n        height: calc(100% - 30px - 113px - 30px);\n    }\n    tr[_ngcontent-%COMP%] {\n        min-width: 600px;\n    }\n    .task-filter-option[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .task-table-filter[_ngcontent-%COMP%] {\n        height: calc(100% - 30px - 200px - 112px);\n    }\n    #task-list-container[_ngcontent-%COMP%] {\n        height: calc(100% - 30px - 48px);\n        margin: 0 15px 30px 15px;\n    }\n    h2[_ngcontent-%COMP%] {\n        margin: 15px 30px 15px 30px;\n    }\n    .common-filters_container[_ngcontent-%COMP%] {\n        margin-left: 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1saXN0LWNvbnRhaW5lci90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQztRQUNuQyxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0kseUNBQXlDO0lBQzdDO0lBQ0E7UUFDSSxnQ0FBZ0M7UUFDaEMsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1saXN0LWNvbnRhaW5lci90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay10YWJsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDEyNHB4IC0gMzBweCk7XG4gICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRhc2stdGFibGUtZmlsdGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAyMDBweCk7XG59XG5cbnRoZWFkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCAtIDYycHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG50Ym9keSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFzay10YWJsZSB0ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi50YXNrLXRhYmxlIHRyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay10YWJsZSB0Ym9keSB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi50YXNrLXRhYmxlIHRoZWFkIHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZDtcbn1cblxuLnRhc2stdGFibGUgdGgge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjAlO1xufVxuXG5oMiB7XG4gICAgbWFyZ2luOiAyMHB4IDQwcHggMjBweCA0MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udGFzay1maWx0ZXItYnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzcyMTVkODtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2stZmlsdGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgbWFyZ2luOiAwIDQwcHggMCA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrLWZpbHRlci1vcHRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbi50YXNrLXRhYmxlLXN0YXR1cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50YXNrLXRhYmxlLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay10YWJsZS10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFzay10YWJsZSB0aGVhZCB0ciB0aDpmaXJzdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ucmlnaHQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMTVkODtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgICBjb2xvcjogIzcyMTVkODtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAycHggMTZweCA4cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xufVxuXG4ucGFnaW5hdGlvbiBhIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbiN0YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgMzBweCAzMHB4IDMwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4IC0gNDhweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnaW5hdGlvbi1saW5rcyB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucGFnaW5hdGlvbiBhOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLXRhYmxlLWRlYWRsaW5lIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5jb21tb24tZmlsdGVyc19jb250YWluZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ucmFkaW8tbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICB0aGVhZCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KSAhaW1wb3J0YW50O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAudGFzay10YWJsZSB7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDExM3B4IC0gMzBweCk7XG4gICAgfVxuICAgIHRyIHtcbiAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICB9XG4gICAgLnRhc2stZmlsdGVyLW9wdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAudGFzay10YWJsZS1maWx0ZXIge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAyMDBweCAtIDExMnB4KTtcbiAgICB9XG4gICAgI3Rhc2stbGlzdC1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSA0OHB4KTtcbiAgICAgICAgbWFyZ2luOiAwIDE1cHggMzBweCAxNXB4O1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcbiAgICB9XG4gICAgLmNvbW1vbi1maWx0ZXJzX2NvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-list',
                templateUrl: './task-list.component.html',
                styleUrls: ['./task-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"] }, { type: src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_7__["TeamService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }]; }, null); })();


/***/ }),

/***/ "HAuM":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/container/person-detail-container/person-detail-container.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PersonDetailContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailContainerComponent", function() { return PersonDetailContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/enum/status.enum */ "0jXk");
/* harmony import */ var src_app_model_team_member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/team-member */ "lIHx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/team.service */ "mqDS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function PersonDetailContainerComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonDetailContainerComponent_tr_41_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const task_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showTaskDetail(task_r1 == null ? null : task_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r1 == null ? null : task_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", task_r1.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.status[task_r1 == null ? null : task_r1.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r1 == null ? null : task_r1.estimate, " h");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", task_r1.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.priority[task_r1 == null ? null : task_r1.priority]);
} }
class PersonDetailContainerComponent {
    constructor(route, taskService, teamService, router, titleService) {
        this.route = route;
        this.taskService = taskService;
        this.teamService = teamService;
        this.router = router;
        this.titleService = titleService;
        this.status = src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__["Status"];
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__["Priority"];
    }
    ngOnInit() {
        let sub = this.route.queryParams.subscribe(params => {
            this.teamService.getTeamMemberById(params['id']).subscribe(result => {
                this.person = new src_app_model_team_member__WEBPACK_IMPORTED_MODULE_3__["TeamMember"](result.data);
                this.titleService.setTitle(this.person.name);
            });
        });
        sub.unsubscribe();
    }
    showTaskDetail(id) {
        this.router.navigate(['task-list', 'task-detail'], { queryParams: { id: id } });
    }
}
PersonDetailContainerComponent.ɵfac = function PersonDetailContainerComponent_Factory(t) { return new (t || PersonDetailContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"])); };
PersonDetailContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonDetailContainerComponent, selectors: [["app-person-detail-container"]], decls: 42, vars: 9, consts: [["id", "person-detail-header"], ["id", "person-name"], [1, "overview"], [1, "overview-table"], [1, "task-container"], [1, "task-table"], ["class", "task-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "task-table-item", 3, "click"], [1, "task-table-title"]], template: function PersonDetailContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Average task priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Average time on task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Current tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Current tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PersonDetailContainerComponent_tr_41_Template, 12, 10, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person == null ? null : ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.rank == null ? "0/5" : ctx.person.rank + "/5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("person-table-status ", ctx.person == null ? null : ctx.person.avg_task_priority, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.priority[ctx.person == null ? null : ctx.person.avg_task_priority]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person == null ? null : ctx.person.avg_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person == null ? null : ctx.person.current_tasks.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.person == null ? null : ctx.person.current_tasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["#person-detail-header[_ngcontent-%COMP%] {\n    padding: 30px 30px 0px 30px;\n    display: inline-flex;\n    width: 100%;\n}\n\n.overview[_ngcontent-%COMP%] {\n    border: 1px solid transparent;\n    border-radius: 20px;\n    background-color: white;\n    padding: 20px;\n    margin: 0px 20px;\n}\n\n.overview-table[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.overview-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: left;\n    font-weight: bold;\n}\n\n.task-table-title[_ngcontent-%COMP%] {\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.task-table-item[_ngcontent-%COMP%]:hover{\n    background-color: #f7f8f9;\n    cursor: pointer;\n  }\n\n.person-table-status[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 7px;\n    border-radius: 10px;\n    color: white;\n}\n\n.person-description-container[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n\n.person-description-title[_ngcontent-%COMP%] {\n    font-size: large;\n    font-weight: bold;\n}\n\n.task-container[_ngcontent-%COMP%] {\n    width: 45%;\n    background-color: white;\n    border: 1px solid transparent;\n    border-radius: 20px;\n    margin: 20px;\n}\n\nh4[_ngcontent-%COMP%] {\n    font-size: large;\n    font-weight: bold;\n    margin: 5px 10px 10px 10px;\n}\n\n.task-table[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 20px;\n}\n\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 1px solid #dddddd;\n    padding: 20px 0 20px 0;\n}\n\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #dddddd;\n}\n\n.task-table-status[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 7px;\n    border-radius: 10px;\n    color: white;\n}\n\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n}\n\ntbody[_ngcontent-%COMP%] {\n    display: block;\n    overflow-y: auto;\n    table-layout: fixed;\n    max-height: 300px;\n}\n\n@media screen and (max-width: 1024px) {\n    .task-container[_ngcontent-%COMP%] {\n        width: calc(100% - 30px);\n        margin: 20px 15px 20px 15px;\n    }\n\n    #person-detail-header[_ngcontent-%COMP%] {\n        padding: 15px 30px 0px 30px;\n    }\n\n    .overview[_ngcontent-%COMP%] {\n        margin: 0px 15px;\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvcGVyc29uLWRldGFpbC1jb250YWluZXIvcGVyc29uLWRldGFpbC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjs7QUFFRjtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9wZXJzb24tZGV0YWlsLWNvbnRhaW5lci9wZXJzb24tZGV0YWlsLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BlcnNvbi1kZXRhaWwtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMHB4IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdmVydmlldyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG59XG5cbi5vdmVydmlldy10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdmVydmlldy10YWJsZSB0aGVhZCB0ciB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2stdGFibGUtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFzay10YWJsZS1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbi5wZXJzb24tdGFibGUtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wZXJzb24tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucGVyc29uLWRlc2NyaXB0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIHdpZHRoOiA0NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW46IDIwcHg7XG59XG5cbmg0IHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogNXB4IDEwcHggMTBweCAxMHB4O1xufVxuXG4udGFzay10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi50YXNrLXRhYmxlIHRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbn1cblxuLnRhc2stdGFibGUgdHIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2stdGFibGUgdGgge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4udGFzay10YWJsZS1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwIDdweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxudGhlYWQsXG50Ym9keSB0ciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxudGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnRhc2stY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICBtYXJnaW46IDIwcHggMTVweCAyMHB4IDE1cHg7XG4gICAgfVxuXG4gICAgI3BlcnNvbi1kZXRhaWwtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4IDBweCAzMHB4O1xuICAgIH1cblxuICAgIC5vdmVydmlldyB7XG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XG4gICAgfVxuXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonDetailContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-person-detail-container',
                templateUrl: './person-detail-container.component.html',
                styleUrls: ['./person-detail-container.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }, { type: src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Boardy Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["footer[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 2px;\n    right: 50px;\n    font-size: 0.9em;\n}\n\nspan[_ngcontent-%COMP%] {\n    color: #7215d8;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDJweDtcbiAgICByaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogIzcyMTVkODtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OadV":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/container/task-list-container/task-filter/task-filter.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TaskFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFilterComponent", function() { return TaskFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TaskFilterComponent {
    constructor() { }
    ngOnInit() {
    }
}
TaskFilterComponent.ɵfac = function TaskFilterComponent_Factory(t) { return new (t || TaskFilterComponent)(); };
TaskFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskFilterComponent, selectors: [["app-task-filter"]], decls: 2, vars: 0, template: function TaskFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "task-filter works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL3Rhc2stbGlzdC1jb250YWluZXIvdGFzay1maWx0ZXIvdGFzay1maWx0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-filter',
                templateUrl: './task-filter.component.html',
                styleUrls: ['./task-filter.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QNcV":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: User, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



// User interface
class User {
}
class AuthService {
    constructor(http) {
        this.http = http;
    }
    // User registration
    register(user) {
        return this.http.post('http://notabot.duckdns.org:32768/api/auth/register', user);
    }
    // Login
    signin(user) {
        return this.http.post('http://notabot.duckdns.org:32768/api/auth/login', user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UkxQ":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/container/overview-container/overview-container.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OverviewContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewContainerComponent", function() { return OverviewContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/enum/status.enum */ "0jXk");
/* harmony import */ var src_app_model_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/task */ "AEEF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../header/header.component */ "2MiI");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");














function OverviewContainerComponent_tr_63_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function OverviewContainerComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverviewContainerComponent_tr_63_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const task_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showTaskDetail(task_r3 == null ? null : task_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OverviewContainerComponent_tr_63_ng_template_7_Template, 1, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3 == null ? null : task_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", task_r3 == null ? null : task_r3.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.status[task_r3 == null ? null : task_r3.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3 == null ? null : task_r3.deadline.split(" ")[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", task_r3.estimate, " hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", task_r3 == null ? null : task_r3.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.priority[task_r3 == null ? null : task_r3.priority]);
} }
function OverviewContainerComponent_a_66_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverviewContainerComponent_a_66_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OverviewContainerComponent_a_67_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverviewContainerComponent_a_67_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { "task-filter": true, "hidden": a1 }; };
const _c1 = function (a1) { return { "task-table": true, "task-table-filter": a1 }; };
class OverviewContainerComponent {
    constructor(router, taskService, userService, titleService) {
        this.router = router;
        this.taskService = taskService;
        this.userService = userService;
        this.titleService = titleService;
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__["Priority"];
        this.status = src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__["Status"];
        this.pagination = {
            prev: "",
            next: ""
        };
        this.showFilter = false;
        this.filter = {
            prio: "",
            status: "",
            assignee: ""
        };
    }
    ngOnInit() {
        this.userService.getUser().subscribe(result => {
            this.user = result;
            this.filterTasks();
        });
        this.titleService.setTitle("Overview");
    }
    mapData(result) {
        this.tasks = result.data.map(val => new src_app_model_task__WEBPACK_IMPORTED_MODULE_3__["Task"](val));
        this.filteredTasks = this.tasks;
        let filter = (this.filter.prio ? "&priority[]=" + this.filter.prio : "") +
            (this.filter.status ? "&status[]=" + this.filter.status : "") +
            ("&assignee[]=" + this.user.id);
        this.pagination.prev = result.links.prev ? result.links.prev + filter : result.links.prev;
        this.pagination.next = result.links.next ? result.links.next + filter : result.links.next;
    }
    showHideFilter() {
        if (this.showFilter) {
            this.showFilter = false;
            return;
        }
        this.showFilter = true;
    }
    onCustomFilter(value) {
        this.filter.status = value;
        this.filterTasks();
    }
    onFilter(target) {
        let wasChange = false;
        switch (target.id) {
            case "task-filter-prio":
                if (this.filter.prio != target.value) {
                    wasChange = true;
                }
                this.filter.prio = target.value;
                break;
            case "task-filter-status":
                if (this.filter.status != target.value) {
                    wasChange = true;
                }
                this.filter.status = target.value;
                break;
        }
        if (wasChange) {
            this.filterTasks();
        }
    }
    filterTasks() {
        let filter = {
            "priority[]": (this.filter.prio && this.filter.prio != "" ? this.filter.prio : undefined),
            "status[]": (this.filter.status && this.filter.status != "" ? this.filter.status : undefined),
            "assignee[]": this.user.id,
        };
        this.taskService.filterTask(JSON.parse(JSON.stringify(filter))).subscribe(result => {
            this.mapData(result);
        });
    }
    showTaskDetail(id) {
        this.router.navigate(['task-list', 'task-detail'], { queryParams: { id: id } });
    }
    prevPage() {
        this.taskService.getPage(this.pagination.prev).subscribe(result => {
            this.mapData(result);
        });
    }
    nextPage() {
        this.taskService.getPage(this.pagination.next).subscribe(result => {
            this.mapData(result);
        });
    }
    onScroll(event) {
        event.target.getElementsByTagName("thead")[0].scrollLeft = event.target.scrollLeft;
    }
}
OverviewContainerComponent.ɵfac = function OverviewContainerComponent_Factory(t) { return new (t || OverviewContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"])); };
OverviewContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewContainerComponent, selectors: [["app-overview-container"]], decls: 69, vars: 9, consts: [["id", "container"], ["id", "task-list-container"], [1, "task-filter-button", 3, "click"], [1, "common-filters_container"], ["type", "radio", "id", "all", "value", "", "name", "status", "checked", "", 3, "change"], ["for", "all", 1, "radio-label"], ["type", "radio", "id", "in-progress", "value", "in_progress", "name", "status", 1, "radio-button", 3, "change"], ["for", "in-progress", 1, "radio-label"], ["type", "radio", "id", "test", "value", "to_test", "name", "status", 1, "radio-button", 3, "change"], ["for", "test", 1, "radio-label"], ["type", "radio", "id", "done", "value", "done", "name", "status", 1, "radio-button", 3, "change"], ["for", "done", 1, "radio-label"], [3, "ngClass"], [1, "task-filter-option"], ["for", "task-filter-prio"], ["id", "task-filter-prio", 3, "change"], ["value", ""], ["value", "low"], ["value", "medium"], ["value", "high"], ["for", "task-filter-status"], ["id", "task-filter-status", 3, "change"], ["value", "free"], ["value", "in_progress"], ["value", "to_test"], ["value", "done"], [3, "ngClass", "scroll"], ["class", "task-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-links"], [3, "click", 4, "ngIf"], [1, "task-table-item", 3, "click"], [1, "task-table-title"], ["empty", ""], [1, "task-table-deadline"], [3, "click"]], template: function OverviewContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OverviewContainerComponent_Template_div_click_6_listener() { return ctx.showHideFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OverviewContainerComponent_Template_input_change_10_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OverviewContainerComponent_Template_input_change_13_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "In progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OverviewContainerComponent_Template_input_change_16_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "To test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OverviewContainerComponent_Template_input_change_19_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OverviewContainerComponent_Template_select_change_27_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "MEDIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OverviewContainerComponent_Template_select_change_40_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "FREE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "IN PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "TO TEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "table", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function OverviewContainerComponent_Template_table_scroll_51_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Deadline/Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, OverviewContainerComponent_tr_63_Template, 16, 11, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, OverviewContainerComponent_a_66_Template, 4, 0, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, OverviewContainerComponent_a_67_Template, 4, 0, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showFilter === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.showFilter === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.prev != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.next != null);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], styles: ["#container[_ngcontent-%COMP%] {\n    background-color: #F2EDF3;\n    height: calc(100vh - 50px);\n    \n}\n\n.task-table[_ngcontent-%COMP%] {\n    display: inline-block;\n    height: calc(100% - 30px - 124px - 30px);\n    margin-top: 28px;\n    width: 100%;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.task-table-filter[_ngcontent-%COMP%] {\n    height: calc(100% - 30px - 200px);\n}\n\nthead[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-top: -28px;\n    display: inline-block;\n    width: calc(100% - 200px - 62px);\n    background-color: white;\n}\n\ntbody[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 100%;\n}\n\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px 0 20px 0;\n    display: inline-block;\n    width: 25%;\n}\n\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n}\n\n.task-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #dddddd;\n}\n\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #dddddd;\n}\n\n.task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 25%;\n}\n\nh2[_ngcontent-%COMP%] {\n    margin: 20px 40px 20px 40px;\n    float: left;\n}\n\n.task-filter-button[_ngcontent-%COMP%] {\n    float: right;\n    margin: 20px 20px 20px 20px;\n    cursor: pointer;\n    color: #7215d8;\n    font-weight: bold;\n}\n\n.task-filter[_ngcontent-%COMP%] {\n    float: left;\n    width: calc(100% - 80px);\n    margin: 0 40px 0 40px;\n    padding: 0 0 20px 0;\n}\n\n.hidden[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.task-filter-option[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 40px;\n}\n\n.task-table-status[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 7px;\n    border-radius: 10px;\n    color: white;\n    text-transform: uppercase;\n}\n\n.task-table-item[_ngcontent-%COMP%]:hover {\n    background-color: #f7f8f9;\n    cursor: pointer;\n}\n\n.task-table-title[_ngcontent-%COMP%] {\n    text-align: left;\n    padding-left: 15px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first {\n    text-align: left !important;\n}\n\n.right-button-container[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.add-button[_ngcontent-%COMP%] {\n    margin: 10px 30px 10px 10px;\n    background-color: #7215d8;\n    border: none;\n    color: white;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    outline: none;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #7215d8;\n    float: left;\n    padding: 2px 16px 8px 16px;\n    text-decoration: none;\n    font-size: x-large;\n    transition: background-color .3s;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: large;\n}\n\n#task-list-container[_ngcontent-%COMP%] {\n    display: block;\n    margin: 30px;\n    height: calc(100% - 60px);\n    border: 1px solid #dddddd;\n    border-radius: 20px;\n    background-color: white;\n}\n\n.pagination-links[_ngcontent-%COMP%] {\n    margin: auto;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.task-table-deadline[_ngcontent-%COMP%] {\n    padding: 0 !important;\n}\n\n.common-filters_container[_ngcontent-%COMP%] {\n    float: left;\n    width: 100%;\n    margin-left: 30px;\n}\n\n.radio-label[_ngcontent-%COMP%] {\n    margin-left: 5px;\n}\n\n.radio-button[_ngcontent-%COMP%] {\n    margin-left: 15px;\n}\n\n@media screen and (max-width: 1024px) {\n    thead[_ngcontent-%COMP%] {\n        width: calc(100% - 32px) !important;\n        overflow: hidden;\n    }\n    .task-table[_ngcontent-%COMP%] {\n        overflow-x: auto;\n        height: calc(100% - 30px - 113px - 30px);\n    }\n    tr[_ngcontent-%COMP%] {\n        min-width: 600px;\n    }\n    .task-filter-option[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .task-table-filter[_ngcontent-%COMP%] {\n        height: calc(100% - 30px - 200px - 112px);\n    }\n    #task-list-container[_ngcontent-%COMP%] {\n        height: calc(100% - 30px - 48px);\n        margin: 0 15px 30px 15px;\n    }\n    h2[_ngcontent-%COMP%] {\n        margin: 15px 30px 15px 30px;\n    }\n    .common-filters_container[_ngcontent-%COMP%] {\n        margin-left: 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvb3ZlcnZpZXctY29udGFpbmVyL292ZXJ2aWV3LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQztRQUNuQyxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0kseUNBQXlDO0lBQzdDO0lBQ0E7UUFDSSxnQ0FBZ0M7UUFDaEMsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvb3ZlcnZpZXctY29udGFpbmVyL292ZXJ2aWV3LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRURGMztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICAvKjUwcHggPSBoZWFkZXIqL1xufVxuXG4udGFzay10YWJsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDEyNHB4IC0gMzBweCk7XG4gICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLnRhc2stdGFibGUtZmlsdGVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAyMDBweCk7XG59XG5cbnRoZWFkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCAtIDYycHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG50Ym9keSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFzay10YWJsZSB0ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi50YXNrLXRhYmxlIHRyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay10YWJsZSB0Ym9keSB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi50YXNrLXRhYmxlIHRoZWFkIHRyIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZDtcbn1cblxuLnRhc2stdGFibGUgdGgge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjUlO1xufVxuXG5oMiB7XG4gICAgbWFyZ2luOiAyMHB4IDQwcHggMjBweCA0MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udGFzay1maWx0ZXItYnV0dG9uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzcyMTVkODtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2stZmlsdGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgbWFyZ2luOiAwIDQwcHggMCA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrLWZpbHRlci1vcHRpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbi50YXNrLXRhYmxlLXN0YXR1cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50YXNrLXRhYmxlLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay10YWJsZS10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFzay10YWJsZSB0aGVhZCB0ciB0aDpmaXJzdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4ucmlnaHQtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggMzBweCAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMTVkODtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgICBjb2xvcjogIzcyMTVkODtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAycHggMTZweCA4cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xufVxuXG4ucGFnaW5hdGlvbiBhIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbiN0YXNrLWxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5wYWdpbmF0aW9uLWxpbmtzIHtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5wYWdpbmF0aW9uIGE6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stdGFibGUtZGVhZGxpbmUge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbW1vbi1maWx0ZXJzX2NvbnRhaW5lciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5yYWRpby1sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIHRoZWFkIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC50YXNrLXRhYmxlIHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4IC0gMTEzcHggLSAzMHB4KTtcbiAgICB9XG4gICAgdHIge1xuICAgICAgICBtaW4td2lkdGg6IDYwMHB4O1xuICAgIH1cbiAgICAudGFzay1maWx0ZXItb3B0aW9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC50YXNrLXRhYmxlLWZpbHRlciB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDIwMHB4IC0gMTEycHgpO1xuICAgIH1cbiAgICAjdGFzay1saXN0LWNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDQ4cHgpO1xuICAgICAgICBtYXJnaW46IDAgMTVweCAzMHB4IDE1cHg7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDMwcHggMTVweCAzMHB4O1xuICAgIH1cbiAgICAuY29tbW9uLWZpbHRlcnNfY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overview-container',
                templateUrl: './overview-container.component.html',
                styleUrls: ['./overview-container.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] }]; }, null); })();


/***/ }),

/***/ "WlYd":
/*!**********************************************!*\
  !*** ./src/app/shared/auth-state.service.ts ***!
  \**********************************************/
/*! exports provided: AuthStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStateService", function() { return AuthStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "7RJT");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/token.service */ "5WFb");




class AuthStateService {
    constructor(token) {
        this.token = token;
        this.userState = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.token.isLoggedIn());
        this.userAuthState = this.userState.asObservable();
    }
    setAuthState(value) {
        this.userState.next(value);
    }
}
AuthStateService.ɵfac = function AuthStateService_Factory(t) { return new (t || AuthStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"])); };
AuthStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthStateService, factory: AuthStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"] }]; }, null); })();


/***/ }),

/***/ "WnTk":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/auth.service */ "QNcV");
/* harmony import */ var _shared_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/token.service */ "5WFb");
/* harmony import */ var _shared_auth_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/auth-state.service */ "WlYd");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SigninComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errors == null ? null : ctx_r0.errors.email, " ");
} }
function SigninComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errors == null ? null : ctx_r1.errors.password, " ");
} }
function SigninComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errors == null ? null : ctx_r2.errors.error, " ");
} }
class SigninComponent {
    constructor(router, fb, authService, token, authState, titleService) {
        this.router = router;
        this.fb = fb;
        this.authService = authService;
        this.token = token;
        this.authState = authState;
        this.titleService = titleService;
        this.errors = null;
        this.loginForm = this.fb.group({
            email: [],
            password: []
        });
    }
    ngOnInit() {
        this.titleService.setTitle("Boardy");
    }
    onSubmit() {
        this.authService.signin(this.loginForm.value).subscribe(result => {
            this.responseHandler(result);
        }, error => {
            this.errors = error.error;
        }, () => {
            this.authState.setAuthState(true);
            this.loginForm.reset();
            this.router.navigate(['dashboard']);
        });
    }
    // Handle response
    responseHandler(data) {
        this.token.handleData(data.access_token);
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_auth_state_service__WEBPACK_IMPORTED_MODULE_5__["AuthStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 17, vars: 4, consts: [["id", "auth-wrapper"], ["class", "alert alert-danger mt-3", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["id", "title"], ["id", "email-container"], [1, "fa", "fa-user", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "email", "type", "text", "placeholder", "email", 1, "form-control"], ["id", "password-container"], [1, "fa", "fa-lock", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "password", "type", "password", "placeholder", "password", 1, "form-control"], ["id", "submit-button", "type", "submit", 1, "btn", "btn-block", "btn-primary"], ["routerLink", "/sign-up"], [1, "alert", "alert-danger", "mt-3"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SigninComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SigninComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SigninComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Boardy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#auth-wrapper[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 30%;\n    \n    padding: 30px;\n    height: 50vh;\n}\n\n#email-container[_ngcontent-%COMP%], #password-container[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\nform[_ngcontent-%COMP%] {\n    display: grid;\n    justify-content: center;\n}\n\ninput[_ngcontent-%COMP%] {\n    border: none;\n    border-bottom: solid 1px gray;\n    background: none;\n    margin-left: 5px;\n}\n\n#title[_ngcontent-%COMP%] {\n    margin: auto;\n    color: #7215d8;\n    font-size: xx-large;\n    margin-bottom: 30px;\n}\n\n#submit-button[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    background-color: #7215d8;\n    border: none;\n}\n\na[_ngcontent-%COMP%] {\n    margin: auto;\n    font-size: smaller;\n    color: darkslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXV0aC13cmFwcGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDMwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFREYzOyAqL1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgaGVpZ2h0OiA1MHZoO1xufVxuXG4jZW1haWwtY29udGFpbmVyLFxuI3Bhc3N3b3JkLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmF5O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI3RpdGxlIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgY29sb3I6ICM3MjE1ZDg7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jc3VibWl0LWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIxNWQ4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JleTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _shared_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"] }, { type: _shared_auth_state_service__WEBPACK_IMPORTED_MODULE_5__["AuthStateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }]; }, null); })();


/***/ }),

/***/ "YBnQ":
/*!*********************************************!*\
  !*** ./src/app/model/enum/priority.enum.ts ***!
  \*********************************************/
/*! exports provided: Priority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
var Priority;
(function (Priority) {
    Priority["low"] = "LOW";
    Priority["medium"] = "MEDIUM";
    Priority["high"] = "HIGH";
})(Priority || (Priority = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signin/signin.component */ "WnTk");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/auth.interceptor */ "bJgF");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "mvyS");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/container/container.component */ "1d0G");
/* harmony import */ var _components_container_task_list_container_task_list_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/container/task-list-container/task-list-container.component */ "+fTq");
/* harmony import */ var _components_container_task_detail_container_task_detail_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/container/task-detail-container/task-detail-container.component */ "igSX");
/* harmony import */ var _components_container_person_detail_container_person_detail_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/container/person-detail-container/person-detail-container.component */ "HAuM");
/* harmony import */ var _components_container_new_task_container_new_task_container_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/container/new-task-container/new-task-container.component */ "vYPB");
/* harmony import */ var _components_container_task_list_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/container/task-list-container/task-list/task-list.component */ "G5JQ");
/* harmony import */ var _components_container_task_list_container_task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/container/task-list-container/task-list-item/task-list-item.component */ "7p+m");
/* harmony import */ var _components_container_task_list_container_task_filter_task_filter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/container/task-list-container/task-filter/task-filter.component */ "OadV");
/* harmony import */ var _components_container_task_detail_container_task_overview_task_overview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/container/task-detail-container/task-overview/task-overview.component */ "zoOI");
/* harmony import */ var _components_container_person_detail_container_current_task_list_current_task_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/container/person-detail-container/current-task-list/current-task-list.component */ "d9xo");
/* harmony import */ var _components_container_person_detail_container_current_task_list_current_task_list_item_current_task_list_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/container/person-detail-container/current-task-list/current-task-list-item/current-task-list-item.component */ "hHrW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/container/overview-container/overview-container.component */ "UkxQ");
/* harmony import */ var _components_container_team_list_container_team_list_container_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/container/team-list-container/team-list-container.component */ "hU4Q");
/* harmony import */ var _components_container_team_list_container_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/container/team-list-container/team-list/team-list.component */ "4s7H");
/* harmony import */ var _angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/locales/sk */ "h6u5");
/* harmony import */ var _angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_container_task_detail_container_subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/container/task-detail-container/subtask-list/subtask-list.component */ "huxS");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");



































Object(_angular_common__WEBPACK_IMPORTED_MODULE_22__["registerLocaleData"])(_angular_common_locales_sk__WEBPACK_IMPORTED_MODULE_26___default.a, 'sk-SK');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
            multi: true
        },
        _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__["MatAutocompleteModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _components_container_container_component__WEBPACK_IMPORTED_MODULE_11__["ContainerComponent"],
        _components_container_task_list_container_task_list_container_component__WEBPACK_IMPORTED_MODULE_12__["TaskListContainerComponent"],
        _components_container_task_detail_container_task_detail_container_component__WEBPACK_IMPORTED_MODULE_13__["TaskDetailContainerComponent"],
        _components_container_person_detail_container_person_detail_container_component__WEBPACK_IMPORTED_MODULE_14__["PersonDetailContainerComponent"],
        _components_container_new_task_container_new_task_container_component__WEBPACK_IMPORTED_MODULE_15__["NewTaskContainerComponent"],
        _components_container_task_list_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_16__["TaskListComponent"],
        _components_container_task_list_container_task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_17__["TaskListItemComponent"],
        _components_container_task_list_container_task_filter_task_filter_component__WEBPACK_IMPORTED_MODULE_18__["TaskFilterComponent"],
        _components_container_task_detail_container_task_overview_task_overview_component__WEBPACK_IMPORTED_MODULE_19__["TaskOverviewComponent"],
        _components_container_person_detail_container_current_task_list_current_task_list_component__WEBPACK_IMPORTED_MODULE_20__["CurrentTaskListComponent"],
        _components_container_person_detail_container_current_task_list_current_task_list_item_current_task_list_item_component__WEBPACK_IMPORTED_MODULE_21__["CurrentTaskListItemComponent"],
        _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_23__["OverviewContainerComponent"],
        _components_container_team_list_container_team_list_container_component__WEBPACK_IMPORTED_MODULE_24__["TeamListContainerComponent"],
        _components_container_team_list_container_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_25__["TeamListComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"],
        _components_container_task_detail_container_subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_32__["SubtaskListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__["MatAutocompleteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                    _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _components_container_container_component__WEBPACK_IMPORTED_MODULE_11__["ContainerComponent"],
                    _components_container_task_list_container_task_list_container_component__WEBPACK_IMPORTED_MODULE_12__["TaskListContainerComponent"],
                    _components_container_task_detail_container_task_detail_container_component__WEBPACK_IMPORTED_MODULE_13__["TaskDetailContainerComponent"],
                    _components_container_person_detail_container_person_detail_container_component__WEBPACK_IMPORTED_MODULE_14__["PersonDetailContainerComponent"],
                    _components_container_new_task_container_new_task_container_component__WEBPACK_IMPORTED_MODULE_15__["NewTaskContainerComponent"],
                    _components_container_task_list_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_16__["TaskListComponent"],
                    _components_container_task_list_container_task_list_item_task_list_item_component__WEBPACK_IMPORTED_MODULE_17__["TaskListItemComponent"],
                    _components_container_task_list_container_task_filter_task_filter_component__WEBPACK_IMPORTED_MODULE_18__["TaskFilterComponent"],
                    _components_container_task_detail_container_task_overview_task_overview_component__WEBPACK_IMPORTED_MODULE_19__["TaskOverviewComponent"],
                    _components_container_person_detail_container_current_task_list_current_task_list_component__WEBPACK_IMPORTED_MODULE_20__["CurrentTaskListComponent"],
                    _components_container_person_detail_container_current_task_list_current_task_list_item_current_task_list_item_component__WEBPACK_IMPORTED_MODULE_21__["CurrentTaskListItemComponent"],
                    _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_23__["OverviewContainerComponent"],
                    _components_container_team_list_container_team_list_container_component__WEBPACK_IMPORTED_MODULE_24__["TeamListContainerComponent"],
                    _components_container_team_list_container_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_25__["TeamListComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_31__["FooterComponent"],
                    _components_container_task_detail_container_subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_32__["SubtaskListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__["MatAutocompleteModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: _shared_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                        multi: true
                    },
                    _angular_common__WEBPACK_IMPORTED_MODULE_22__["DatePipe"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZIhg":
/*!*****************************************************!*\
  !*** ./src/app/shared/guards/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token.service */ "5WFb");
/* harmony import */ var _auth_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth-state.service */ "WlYd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AuthGuardService {
    constructor(tokenService, authStateService, router) {
        this.tokenService = tokenService;
        this.authStateService = authStateService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.tokenService.isLoggedIn() || this.router.url == "/sign-up") {
            return true;
        }
        // navigate to login page
        this.router.navigate(['/sign-in']);
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_state_service__WEBPACK_IMPORTED_MODULE_2__["AuthStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"] }, { type: _auth_state_service__WEBPACK_IMPORTED_MODULE_2__["AuthStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "bJgF":
/*!********************************************!*\
  !*** ./src/app/shared/auth.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.service */ "5WFb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthInterceptor {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    intercept(req, next) {
        if (!this.tokenService.isValidToken() && this.router.url != "/sign-up") {
            this.router.navigate(['/sing-in']);
        }
        const accessToken = this.tokenService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken
            }
        });
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((response) => {
            if (response.status === 401) {
                this.router.navigate(['/sign-in']);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _token_service__WEBPACK_IMPORTED_MODULE_3__["TokenService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "d9xo":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/container/person-detail-container/current-task-list/current-task-list.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: CurrentTaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTaskListComponent", function() { return CurrentTaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CurrentTaskListComponent {
    constructor() { }
    ngOnInit() {
    }
}
CurrentTaskListComponent.ɵfac = function CurrentTaskListComponent_Factory(t) { return new (t || CurrentTaskListComponent)(); };
CurrentTaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentTaskListComponent, selectors: [["app-current-task-list"]], decls: 2, vars: 0, template: function CurrentTaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "current-task-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL3BlcnNvbi1kZXRhaWwtY29udGFpbmVyL2N1cnJlbnQtdGFzay1saXN0L2N1cnJlbnQtdGFzay1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentTaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-current-task-list',
                templateUrl: './current-task-list.component.html',
                styleUrls: ['./current-task-list.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ev4g":
/*!*************************************************!*\
  !*** ./src/app/shared/services/task.service.ts ***!
  \*************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TaskService {
    constructor(http) {
        this.http = http;
    }
    getTasks() {
        return this.http.get('http://notabot.duckdns.org:32768/api/tasks');
    }
    getAllTasks() {
        return this.http.get('http://notabot.duckdns.org:32768/api/all-tasks-without-parent');
    }
    getTaskById(id) {
        return this.http.get('http://notabot.duckdns.org:32768/api/tasks/' + id);
    }
    updateTask(task_id, body) {
        return this.http.post('http://notabot.duckdns.org:32768/api/tasks/' + task_id, body);
    }
    createTask(task) {
        return this.http.post('http://notabot.duckdns.org:32768/api/tasks', task);
    }
    getPage(url) {
        return this.http.get(url);
    }
    filterTask(filter) {
        return this.http.get('http://notabot.duckdns.org:32768/api/tasks', { params: filter });
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hHrW":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/components/container/person-detail-container/current-task-list/current-task-list-item/current-task-list-item.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: CurrentTaskListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentTaskListItemComponent", function() { return CurrentTaskListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CurrentTaskListItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
CurrentTaskListItemComponent.ɵfac = function CurrentTaskListItemComponent_Factory(t) { return new (t || CurrentTaskListItemComponent)(); };
CurrentTaskListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentTaskListItemComponent, selectors: [["app-current-task-list-item"]], decls: 2, vars: 0, template: function CurrentTaskListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "current-task-list-item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL3BlcnNvbi1kZXRhaWwtY29udGFpbmVyL2N1cnJlbnQtdGFzay1saXN0L2N1cnJlbnQtdGFzay1saXN0LWl0ZW0vY3VycmVudC10YXNrLWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentTaskListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-current-task-list-item',
                templateUrl: './current-task-list-item.component.html',
                styleUrls: ['./current-task-list-item.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "hU4Q":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/container/team-list-container/team-list-container.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TeamListContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListContainerComponent", function() { return TeamListContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ "2MiI");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation/navigation.component */ "mvyS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");






class TeamListContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamListContainerComponent.ɵfac = function TeamListContainerComponent_Factory(t) { return new (t || TeamListContainerComponent)(); };
TeamListContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamListContainerComponent, selectors: [["app-team-list-container"]], decls: 5, vars: 0, consts: [["id", "container"]], template: function TeamListContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["#container[_ngcontent-%COMP%]{\n  background-color: #F2EDF3;\n  height: calc(100vh - 50px); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGVhbS1saXN0LWNvbnRhaW5lci90ZWFtLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCLEVBQUUsZ0JBQWdCO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGVhbS1saXN0LWNvbnRhaW5lci90ZWFtLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFREYzO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTsgLyo1MHB4ID0gaGVhZGVyKi9cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamListContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team-list-container',
                templateUrl: './team-list-container.component.html',
                styleUrls: ['./team-list-container.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "huxS":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/container/task-detail-container/subtask-list/subtask-list.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SubtaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtaskListComponent", function() { return SubtaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/task */ "AEEF");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/enum/status.enum */ "0jXk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SubtaskListComponent_div_1_table_4_tr_13_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function SubtaskListComponent_div_1_table_4_tr_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_table_4_tr_13_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const subtask_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); ctx_r9.onRemoveSubtask(subtask_r6.id); return ctx_r9.open(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_table_4_tr_13_Template_td_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const subtask_r6 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.showTaskDetail(subtask_r6 == null ? null : subtask_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_table_4_tr_13_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const subtask_r6 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.onRemoveSubtask(subtask_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_table_4_tr_13_Template_td_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const subtask_r6 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.showTaskDetail(subtask_r6 == null ? null : subtask_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_table_4_tr_13_Template_td_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const subtask_r6 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.showTaskDetail(subtask_r6 == null ? null : subtask_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SubtaskListComponent_div_1_table_4_tr_13_ng_template_11_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_table_4_tr_13_Template_td_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const subtask_r6 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.showTaskDetail(subtask_r6 == null ? null : subtask_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subtask_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subtask_r6 == null ? null : subtask_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", subtask_r6 == null ? null : subtask_r6.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.status[subtask_r6 == null ? null : subtask_r6.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((subtask_r6 == null ? null : subtask_r6.assignee == null ? null : subtask_r6.assignee.name) ? subtask_r6 == null ? null : subtask_r6.assignee == null ? null : subtask_r6.assignee.name : "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", subtask_r6 == null ? null : subtask_r6.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.priority[subtask_r6 == null ? null : subtask_r6.priority]);
} }
function SubtaskListComponent_div_1_table_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SubtaskListComponent_div_1_table_4_Template_table_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Assignee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SubtaskListComponent_div_1_table_4_tr_13_Template, 16, 10, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.task.subTasks);
} }
function SubtaskListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subtasks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onAddLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubtaskListComponent_div_1_table_4_Template, 14, 1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.task == null ? null : ctx_r0.task.subTasks.length) > 0);
} }
function SubtaskListComponent_div_2_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function SubtaskListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Parent task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_2_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onRemoveParent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SubtaskListComponent_div_2_Template_table_scroll_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Assignee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Estimate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_2_Template_tr_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.showTaskDetail(ctx_r25.parent.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SubtaskListComponent_div_2_ng_template_27_Template, 1, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.parent == null ? null : ctx_r1.parent.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", ctx_r1.parent == null ? null : ctx_r1.parent.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.status[ctx_r1.parent == null ? null : ctx_r1.parent.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r1.parent == null ? null : ctx_r1.parent.assignee == null ? null : ctx_r1.parent.assignee.name) ? ctx_r1.parent == null ? null : ctx_r1.parent.assignee == null ? null : ctx_r1.parent.assignee.name : "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.parent.estimate, " hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", ctx_r1.parent == null ? null : ctx_r1.parent.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.priority[ctx_r1.parent == null ? null : ctx_r1.parent.priority]);
} }
function SubtaskListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remove subtask link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_ng_template_3_Template_button_click_3_listener() { const modal_r26 = ctx.$implicit; return modal_r26.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to unlink this subtask?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_ng_template_3_Template_button_click_10_listener() { const modal_r26 = ctx.$implicit; return modal_r26.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_ng_template_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const modal_r26 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r29.remove(); return modal_r26.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SubtaskListComponent {
    constructor(router, taskService, modalService) {
        this.router = router;
        this.taskService = taskService;
        this.modalService = modalService;
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_2__["Priority"];
        this.status = src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_3__["Status"];
        this.addTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeParent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeSubtask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.task.parent_id) {
            this.taskService.getTaskById("" + this.task.parent_id).subscribe(result => {
                this.parent = new src_app_model_task__WEBPACK_IMPORTED_MODULE_1__["Task"](result.data);
            });
        }
    }
    onAddLink() {
        this.addTask.emit();
    }
    onRemoveParent() {
        this.removeParent.emit();
    }
    remove() {
        this.removeSubtask.emit(this.subtaskToRemove);
    }
    onRemoveSubtask(value) {
        this.subtaskToRemove = value;
    }
    showTaskDetail(id) {
        this.redirectTo(id);
    }
    redirectTo(id) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => this.router.navigate(['task-list', 'task-detail'], { queryParams: { id: id } }));
    }
    onScroll(event) {
        event.target.getElementsByTagName("thead")[0].scrollLeft = event.target.scrollLeft;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        }, (reason) => {
        });
    }
}
SubtaskListComponent.ɵfac = function SubtaskListComponent_Factory(t) { return new (t || SubtaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"])); };
SubtaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubtaskListComponent, selectors: [["app-subtask-list"]], inputs: { task: "task" }, outputs: { addTask: "addTask", removeParent: "removeParent", removeSubtask: "removeSubtask" }, decls: 5, vars: 2, consts: [[1, "subtask"], [4, "ngIf"], ["deleteModal", ""], [1, "fa", "fa-plus", 3, "click"], ["class", "task-table", 3, "scroll", 4, "ngIf"], [1, "task-table", 3, "scroll"], ["class", "task-table-item", 4, "ngFor", "ngForOf"], [1, "task-table-item"], [3, "click"], [1, "fa", "fa-minus"], [1, "task-table-title", 3, "click"], ["empty", ""], [1, "fa", "fa-minus", 3, "click"], [1, "task-table-item", 3, "click"], [1, "task-table-title"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "delete-options-buttons"]], template: function SubtaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubtaskListComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubtaskListComponent_div_2_Template, 34, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubtaskListComponent_ng_template_3_Template, 14, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.task == null ? null : ctx.task.parent_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".subtask[_ngcontent-%COMP%] {\n     width: calc(70% - 60px);\n     background-color: white;\n     border: 1px solid transparent;\n     border-radius: 20px;\n     margin: 20px 20px 20px 0;\n     float: left;\n }\n \n h4[_ngcontent-%COMP%] {\n     font-size: large;\n     font-weight: bold;\n     float: left;\n     margin: 15px 15px 8px 15px;\n }\n \n .add-button[_ngcontent-%COMP%] {\n     margin: 10px 15px 10px 10px;\n     background-color: #7215d8;\n     border: none;\n     color: white;\n     border: 1px solid transparent;\n     border-radius: 5px;\n     outline: none;\n     float: right;\n }\n \n .task-table[_ngcontent-%COMP%] {\n     display: inline-block;\n     margin-top: 28px;\n     width: 100%;\n     overflow-y: auto;\n     overflow-x: hidden;\n }\n \n thead[_ngcontent-%COMP%] {\n     position: absolute;\n     margin-top: -28px;\n     display: inline-block;\n     width: calc(70% - 201px);\n     background-color: white;\n }\n \n tbody[_ngcontent-%COMP%] {\n     display: inline-block;\n     width: 100%;\n }\n \n .task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n     text-align: center;\n     padding: 20px 0 20px 0;\n     display: inline-block;\n     width: 20%;\n }\n \n .task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n     width: 100%;\n     display: inline-block;\n     text-align: center;\n }\n \n .task-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n     border-bottom: 1px solid #dddddd;\n }\n \n .task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n     border-bottom: 2px solid #dddddd;\n }\n \n .task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n     display: inline-block;\n     width: 20%;\n }\n \n .task-table-status[_ngcontent-%COMP%] {\n     display: inline-block;\n     padding: 0 7px;\n     border-radius: 10px;\n     color: white;\n     text-transform: uppercase;\n }\n \n .task-table-title[_ngcontent-%COMP%] {\n     text-align: left;\n     padding-left: 15px;\n     white-space: nowrap;\n     overflow: hidden;\n     text-overflow: ellipsis;\n }\n \n .task-table-item[_ngcontent-%COMP%]:hover {\n     background-color: #f7f8f9;\n     cursor: pointer;\n }\n \n .task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first {\n     text-align: left !important;\n }\n \n span[_ngcontent-%COMP%] {\n     cursor: pointer;\n     margin: 0px 5px 0px 5px;\n }\n \n .fa[_ngcontent-%COMP%]   .fa-plus[_ngcontent-%COMP%] {\n     cursor: pointer;\n }\n \n .delete-options-buttons[_ngcontent-%COMP%] {\n     display: flex;\n     justify-content: flex-end;\n }\n \n .delete-options-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n     margin: 10px;\n }\n \n @media screen and (max-width: 1024px) {\n     .subtask[_ngcontent-%COMP%] {\n         margin: 20px 15px 0 15px;\n         width: calc(100% - 30px);\n     }\n     thead[_ngcontent-%COMP%] {\n         width: calc(100% - 38px - 10px) !important;\n         overflow: hidden;\n     }\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyL3N1YnRhc2stbGlzdC9zdWJ0YXNrLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztLQUNJLHVCQUF1QjtLQUN2Qix1QkFBdUI7S0FDdkIsNkJBQTZCO0tBQzdCLG1CQUFtQjtLQUNuQix3QkFBd0I7S0FDeEIsV0FBVztDQUNmOztDQUVBO0tBQ0ksZ0JBQWdCO0tBQ2hCLGlCQUFpQjtLQUNqQixXQUFXO0tBQ1gsMEJBQTBCO0NBQzlCOztDQUVBO0tBQ0ksMkJBQTJCO0tBQzNCLHlCQUF5QjtLQUN6QixZQUFZO0tBQ1osWUFBWTtLQUNaLDZCQUE2QjtLQUM3QixrQkFBa0I7S0FDbEIsYUFBYTtLQUNiLFlBQVk7Q0FDaEI7O0NBRUE7S0FDSSxxQkFBcUI7S0FDckIsZ0JBQWdCO0tBQ2hCLFdBQVc7S0FDWCxnQkFBZ0I7S0FDaEIsa0JBQWtCO0NBQ3RCOztDQUVBO0tBQ0ksa0JBQWtCO0tBQ2xCLGlCQUFpQjtLQUNqQixxQkFBcUI7S0FDckIsd0JBQXdCO0tBQ3hCLHVCQUF1QjtDQUMzQjs7Q0FFQTtLQUNJLHFCQUFxQjtLQUNyQixXQUFXO0NBQ2Y7O0NBRUE7S0FDSSxrQkFBa0I7S0FDbEIsc0JBQXNCO0tBQ3RCLHFCQUFxQjtLQUNyQixVQUFVO0NBQ2Q7O0NBRUE7S0FDSSxXQUFXO0tBQ1gscUJBQXFCO0tBQ3JCLGtCQUFrQjtDQUN0Qjs7Q0FFQTtLQUNJLGdDQUFnQztDQUNwQzs7Q0FFQTtLQUNJLGdDQUFnQztDQUNwQzs7Q0FFQTtLQUNJLHFCQUFxQjtLQUNyQixVQUFVO0NBQ2Q7O0NBRUE7S0FDSSxxQkFBcUI7S0FDckIsY0FBYztLQUNkLG1CQUFtQjtLQUNuQixZQUFZO0tBQ1oseUJBQXlCO0NBQzdCOztDQUVBO0tBQ0ksZ0JBQWdCO0tBQ2hCLGtCQUFrQjtLQUNsQixtQkFBbUI7S0FDbkIsZ0JBQWdCO0tBQ2hCLHVCQUF1QjtDQUMzQjs7Q0FFQTtLQUNJLHlCQUF5QjtLQUN6QixlQUFlO0NBQ25COztDQUVBO0tBQ0ksMkJBQTJCO0NBQy9COztDQUVBO0tBQ0ksZUFBZTtLQUNmLHVCQUF1QjtDQUMzQjs7Q0FFQTtLQUNJLGVBQWU7Q0FDbkI7O0NBRUE7S0FDSSxhQUFhO0tBQ2IseUJBQXlCO0NBQzdCOztDQUVBO0tBQ0ksWUFBWTtDQUNoQjs7Q0FFQTtLQUNJO1NBQ0ksd0JBQXdCO1NBQ3hCLHdCQUF3QjtLQUM1QjtLQUNBO1NBQ0ksMENBQTBDO1NBQzFDLGdCQUFnQjtLQUNwQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyL3N1YnRhc2stbGlzdC9zdWJ0YXNrLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuc3VidGFzayB7XG4gICAgIHdpZHRoOiBjYWxjKDcwJSAtIDYwcHgpO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMDtcbiAgICAgZmxvYXQ6IGxlZnQ7XG4gfVxuIFxuIGg0IHtcbiAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgIGZsb2F0OiBsZWZ0O1xuICAgICBtYXJnaW46IDE1cHggMTVweCA4cHggMTVweDtcbiB9XG4gXG4gLmFkZC1idXR0b24ge1xuICAgICBtYXJnaW46IDEwcHggMTVweCAxMHB4IDEwcHg7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjE1ZDg7XG4gICAgIGJvcmRlcjogbm9uZTtcbiAgICAgY29sb3I6IHdoaXRlO1xuICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICBvdXRsaW5lOiBub25lO1xuICAgICBmbG9hdDogcmlnaHQ7XG4gfVxuIFxuIC50YXNrLXRhYmxlIHtcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuIH1cbiBcbiB0aGVhZCB7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgbWFyZ2luLXRvcDogLTI4cHg7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgd2lkdGg6IGNhbGMoNzAlIC0gMjAxcHgpO1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiB9XG4gXG4gdGJvZHkge1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIHdpZHRoOiAxMDAlO1xuIH1cbiBcbiAudGFzay10YWJsZSB0ZCB7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICB3aWR0aDogMjAlO1xuIH1cbiBcbiAudGFzay10YWJsZSB0ciB7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gXG4gLnRhc2stdGFibGUgdGJvZHkgdHIge1xuICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbiB9XG4gXG4gLnRhc2stdGFibGUgdGhlYWQgdHIge1xuICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZDtcbiB9XG4gXG4gLnRhc2stdGFibGUgdGgge1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIHdpZHRoOiAyMCU7XG4gfVxuIFxuIC50YXNrLXRhYmxlLXN0YXR1cyB7XG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiB9XG4gXG4gLnRhc2stdGFibGUtdGl0bGUge1xuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuIH1cbiBcbiAudGFzay10YWJsZS1pdGVtOmhvdmVyIHtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmOTtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cbiBcbiAudGFzay10YWJsZSB0aGVhZCB0ciB0aDpmaXJzdCB7XG4gICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiB9XG4gXG4gc3BhbiB7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHg7XG4gfVxuIFxuIC5mYSAuZmEtcGx1cyB7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiB9XG4gXG4gLmRlbGV0ZS1vcHRpb25zLWJ1dHRvbnMge1xuICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuIH1cbiBcbiAuZGVsZXRlLW9wdGlvbnMtYnV0dG9ucyBidXR0b24ge1xuICAgICBtYXJnaW46IDEwcHg7XG4gfVxuIFxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAuc3VidGFzayB7XG4gICAgICAgICBtYXJnaW46IDIwcHggMTVweCAwIDE1cHg7XG4gICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgIH1cbiAgICAgdGhlYWQge1xuICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM4cHggLSAxMHB4KSAhaW1wb3J0YW50O1xuICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgfVxuIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubtaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subtask-list',
                templateUrl: './subtask-list.component.html',
                styleUrls: ['./subtask-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeParent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeSubtask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "igSX":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/container/task-detail-container/task-detail-container.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: TaskDetailContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailContainerComponent", function() { return TaskDetailContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/task */ "AEEF");
/* harmony import */ var src_app_model_team_member__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/team-member */ "lIHx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/team.service */ "mqDS");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_overview_task_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./task-overview/task-overview.component */ "zoOI");
/* harmony import */ var _subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./subtask-list/subtask-list.component */ "huxS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





















function TaskDetailContainerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.assignToMe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assign to me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_4_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.totest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_4_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.done(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.unasign(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unassign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskDetailContainerComponent_div_4_button_3_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskDetailContainerComponent_div_4_button_4_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.task == null ? null : ctx_r1.task.status) == "in_progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.task == null ? null : ctx_r1.task.status) == "to_test");
} }
function TaskDetailContainerComponent_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_5_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.totest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_5_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.done(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx_r33.open(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assign to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskDetailContainerComponent_div_5_button_3_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskDetailContainerComponent_div_5_button_4_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.task == null ? null : ctx_r2.task.assignee) != null && (ctx_r2.task == null ? null : ctx_r2.task.assignee.id) == (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.id) && (ctx_r2.task == null ? null : ctx_r2.task.status) == "in_progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.task == null ? null : ctx_r2.task.assignee) != null && (ctx_r2.task == null ? null : ctx_r2.task.assignee.id) == (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.id) && (ctx_r2.task == null ? null : ctx_r2.task.status) == "to_test");
} }
function TaskDetailContainerComponent_app_task_overview_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-task-overview", 23);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r3.task)("user", ctx_r3.currentUser);
} }
function TaskDetailContainerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Client");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.task == null ? null : ctx_r4.task.client_id);
} }
function TaskDetailContainerComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.task == null ? null : ctx_r5.task.assignee.name);
} }
function TaskDetailContainerComponent_ng_template_18_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_18_span_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.assignToMe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assign to me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_ng_template_18_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_18_span_2_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx_r39.open(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assign to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " This task has no assignee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskDetailContainerComponent_ng_template_18_span_1_Template, 5, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskDetailContainerComponent_ng_template_18_span_2_Template, 5, 0, "span", 24);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.task == null ? null : ctx_r7.task.creator.id) != (ctx_r7.currentUser == null ? null : ctx_r7.currentUser.id) && (ctx_r7.task == null ? null : ctx_r7.task.assignee) == null && (ctx_r7.task == null ? null : ctx_r7.task.status) == "free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.task == null ? null : ctx_r7.task.creator.id) == (ctx_r7.currentUser == null ? null : ctx_r7.currentUser.id));
} }
function TaskDetailContainerComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Task links ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_20_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx_r41.open(_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This task has no links. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_app_subtask_list_22_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-subtask-list", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addTask", function TaskDetailContainerComponent_app_subtask_list_22_Template_app_subtask_list_addTask_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx_r43.open(_r13); })("removeParent", function TaskDetailContainerComponent_app_subtask_list_22_Template_app_subtask_list_removeParent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx_r45.open(_r15); })("removeSubtask", function TaskDetailContainerComponent_app_subtask_list_22_Template_app_subtask_list_removeSubtask_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.unlinkSubtask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r10.task);
} }
function TaskDetailContainerComponent_ng_template_23_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_23_tr_19_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const person_r49 = ctx.$implicit; const modal_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r50.assignTo(person_r49.id); return modal_r47.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r49 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r49.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r49.rank == null ? "0/5" : person_r49.rank + "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", person_r49.avg_task_priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.priority[person_r49.avg_task_priority]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r49.avg_time);
} }
function TaskDetailContainerComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose a person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_23_Template_button_click_3_listener() { const modal_r47 = ctx.$implicit; return modal_r47.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Avg rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Avg priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Avg time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TaskDetailContainerComponent_ng_template_23_tr_19_Template, 10, 7, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.team);
} }
function TaskDetailContainerComponent_ng_template_25_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "parent of");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_ng_template_25_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "subtask of");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_ng_template_25_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r59.title, " ");
} }
function TaskDetailContainerComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add task link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_25_Template_button_click_3_listener() { const modal_r54 = ctx.$implicit; return modal_r54.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "This task is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskDetailContainerComponent_ng_template_25_Template_select_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.onLinkRelationChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskDetailContainerComponent_ng_template_25_option_11_Template, 2, 0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskDetailContainerComponent_ng_template_25_option_12_Template, 2, 0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-autocomplete", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function TaskDetailContainerComponent_ng_template_25_Template_mat_autocomplete_optionSelected_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.onTaskSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TaskDetailContainerComponent_ng_template_25_mat_option_20_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Task has not been created yet? Create it ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_25_Template_a_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const modal_r54 = ctx.$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r64.addTask(); return modal_r54.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " and then link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_25_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const modal_r54 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r65.selectedTask != null && ctx_r65.linkTask(); return modal_r54.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.task.parent_id == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.task.parent_id == null && ctx_r14.task.subTasks.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r14.myControl)("matAutocomplete", _r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r14.displayProperty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 6, ctx_r14.filteredOptions));
} }
function TaskDetailContainerComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remove parent link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_27_Template_button_click_3_listener() { const modal_r66 = ctx.$implicit; return modal_r66.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Are you sure you want to unlink this task from parent?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_27_Template_button_click_10_listener() { const modal_r66 = ctx.$implicit; return modal_r66.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_27_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const modal_r66 = ctx.$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r69.unlinkFromParent(); return modal_r66.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TaskDetailContainerComponent {
    constructor(route, taskService, teamService, userService, modalService, titleService, router, activatedRoute) {
        this.route = route;
        this.taskService = taskService;
        this.teamService = teamService;
        this.userService = userService;
        this.modalService = modalService;
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__["Priority"];
        this.availableTasks = [];
        this.selectedRelation = "parent";
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    _filter(value) {
        const filterValue = value.toString().toLowerCase();
        let tasks = this.availableTasks.filter(it => it.id != this.task.id && it.title.toLowerCase().startsWith(filterValue));
        if (this.selectedRelation == 'parent') {
            tasks = tasks.filter(it => it.subTasks == null || it.subTasks.length == 0);
        }
        return tasks;
    }
    ngOnInit() {
        let sub = this.route.queryParams.subscribe(params => {
            this.taskService.getTaskById(params['id']).subscribe(result => {
                this.task = new src_app_model_task__WEBPACK_IMPORTED_MODULE_2__["Task"](result.data);
                this.titleService.setTitle(this.task.title);
                if (this.task.parent_id != null) {
                    this.hasParent = true;
                }
                if (this.task.subTasks.length == null || this.task.subTasks.length > 0) {
                    this.hasSubtasks = true;
                }
            });
        });
        sub.unsubscribe();
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => this._filter(value)));
        this.userService.getUser().subscribe(data => {
            this.currentUser = data;
        });
        this.teamService.getAllTeamMembers().subscribe(result => {
            this.team = result.data.map(val => new src_app_model_team_member__WEBPACK_IMPORTED_MODULE_3__["TeamMember"](val));
        });
        this.taskService.getAllTasks().subscribe(result => {
            this.availableTasks = result.data;
        });
    }
    onLinkRelationChange(value) {
        this.selectedRelation = value;
    }
    onTaskSelected(event) {
        this.selectedTask = event.option.value;
    }
    displayProperty(value) {
        if (value) {
            return value.title;
        }
    }
    linkTask() {
        if (this.selectedRelation == "parent") {
            this.taskService.updateTask(this.selectedTask.id, { "parent_id": this.task.id }).subscribe(result => {
                this.taskService.getTaskById(this.task.id + "").subscribe(result => {
                    this.task = new src_app_model_task__WEBPACK_IMPORTED_MODULE_2__["Task"](result.data);
                });
            });
        }
        else {
            this.taskService.updateTask(this.task.id, { "parent_id": this.selectedTask.id }).subscribe(result => {
                this.taskService.getTaskById(this.task.id + "").subscribe(result => {
                    this.task = new src_app_model_task__WEBPACK_IMPORTED_MODULE_2__["Task"](result.data);
                });
            });
        }
    }
    addTask() {
        this.router.navigate(['task-list/new-task']);
    }
    unlinkFromParent() {
        this.taskService.updateTask(this.task.id, { "parent_id": null }).subscribe(result => {
            this.taskService.getTaskById(this.task.id + "").subscribe(result => {
                this.task = new src_app_model_task__WEBPACK_IMPORTED_MODULE_2__["Task"](result.data);
            });
        });
    }
    unlinkSubtask(value) {
        this.taskService.updateTask(value, { "parent_id": null }).subscribe(result => {
            this.taskService.getTaskById(this.task.id + "").subscribe(result => {
                this.task = new src_app_model_task__WEBPACK_IMPORTED_MODULE_2__["Task"](result.data);
            });
        });
    }
    assignToMe() {
        this.userService.getUser().subscribe((user) => {
            this.taskService.updateTask(this.task.id, { "assignee_id": user.id }).subscribe(data => {
                this.task.assignee = user;
                this.task.status = "in_progress";
            }, error => {
                console.log("ERROR");
            });
        });
    }
    isAssignedToMe() {
        this.userService.getUser().subscribe((user) => {
            return user.id == this.task.assignee.id;
        });
    }
    unasign() {
        this.taskService.updateTask(this.task.id, { "assignee_id": null, "status": "free" }).subscribe(data => {
            this.task.assignee = null;
            this.task.status = "free";
        }, error => {
            console.log("ERROR");
        });
    }
    totest() {
        this.taskService.updateTask(this.task.id, { "status": "to_test" }).subscribe(data => {
            this.task.status = "to_test";
        }, error => {
            console.log("ERROR");
        });
    }
    done() {
        this.taskService.updateTask(this.task.id, { "status": "done" }).subscribe(data => {
            this.task.status = "done";
        }, error => {
            console.log("ERROR");
        });
    }
    assignTo(id) {
        this.taskService.updateTask(this.task.id, { "assignee_id": id }).subscribe(data => {
            this.task.assignee = this.getLocalTeamMember(id);
            if (this.task.status = "free") {
                this.task.status = "in_progress";
            }
        }, error => {
            console.log("ERROR");
        });
    }
    getLocalTeamMember(id) {
        for (let member of this.team) {
            if (member.id == id) {
                return {
                    id: id,
                    name: member.name,
                    email: member.email,
                    is_project_manager: member.is_project_manager,
                    created_at: null,
                    updated_at: null
                };
            }
        }
        return null;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
        });
    }
}
TaskDetailContainerComponent.ɵfac = function TaskDetailContainerComponent_Factory(t) { return new (t || TaskDetailContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
TaskDetailContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskDetailContainerComponent, selectors: [["app-task-detail-container"]], decls: 29, vars: 12, consts: [["id", "task-detail-header"], ["id", "task-title"], ["class", "button-container", 4, "ngIf"], [3, "task", "user", 4, "ngIf"], [1, "people-container"], [1, "people-detail"], ["class", "people-detail", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notAssigned", ""], ["class", "task-links-header", 4, "ngIf"], ["class", "empty-links-message", 4, "ngIf"], [3, "task", "addTask", "removeParent", "removeSubtask", 4, "ngIf"], ["mymodal", ""], ["linkModal", ""], ["deleteModal", ""], [1, "button-container"], ["id", "assign-button", 1, "btn", "btn-block", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "unassign", 3, "click"], ["class", "btn btn-primary totest", 3, "click", 4, "ngIf"], ["class", "btn btn-primary done", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "totest", 3, "click"], [1, "btn", "btn-primary", "done", 3, "click"], ["id", "assign-button", 1, "btn", "btn-primary", 3, "click"], [3, "task", "user"], [4, "ngIf"], [1, "assign-link", 3, "click"], [1, "task-links-header"], [1, "fa", "fa-plus", 3, "click"], [1, "empty-links-message"], [3, "task", "addTask", "removeParent", "removeSubtask"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "team-table"], ["class", "team-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "team-table-item", 3, "click"], [1, "link-relation-container"], [3, "change"], ["value", "parent", 4, "ngIf"], ["value", "subtask", 4, "ngIf"], [1, "link-container"], [1, "example-full-width"], ["type", "text", "placeholder", "Pick task", "aria-label", "Number", "matInput", "", 3, "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "add-link", 3, "click"], [1, "add-button"], [3, "click"], ["value", "parent"], ["value", "subtask"], [3, "value"], [1, "delete-options-buttons"]], template: function TaskDetailContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskDetailContainerComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskDetailContainerComponent_div_4_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskDetailContainerComponent_div_5_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskDetailContainerComponent_app_task_overview_6_Template, 1, 2, "app-task-overview", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Project manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskDetailContainerComponent_div_13_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TaskDetailContainerComponent_span_17_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TaskDetailContainerComponent_ng_template_18_Template, 3, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TaskDetailContainerComponent_div_20_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TaskDetailContainerComponent_div_21_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskDetailContainerComponent_app_subtask_list_22_Template, 1, 1, "app-subtask-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskDetailContainerComponent_ng_template_23_Template, 20, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TaskDetailContainerComponent_ng_template_25_Template, 31, 8, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TaskDetailContainerComponent_ng_template_27_Template, 14, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.creator.id) != (ctx.currentUser == null ? null : ctx.currentUser.id) && (ctx.task == null ? null : ctx.task.assignee) == null && (ctx.task == null ? null : ctx.task.status) == "free");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.creator.id) != (ctx.currentUser == null ? null : ctx.currentUser.id) && (ctx.task == null ? null : ctx.task.assignee) != null && (ctx.task == null ? null : ctx.task.assignee.id) == (ctx.currentUser == null ? null : ctx.currentUser.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.creator.id) == (ctx.currentUser == null ? null : ctx.currentUser.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.creator.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.client_id) != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.assignee) != null)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task && (ctx.task.subTasks.length == 0 && !ctx.task.parent_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task && (ctx.task.subTasks.length == 0 && !ctx.task.parent_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task && (ctx.task.subTasks.length > 0 || ctx.task.parent_id));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _task_overview_task_overview_component__WEBPACK_IMPORTED_MODULE_13__["TaskOverviewComponent"], _subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_14__["SubtaskListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["#task-detail-header[_ngcontent-%COMP%] {\n    padding: 30px 30px 0px 30px;\n    display: inline-flex;\n    width: 100%;\n}\n\n#asign-button[_ngcontent-%COMP%] {\n    float: right;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    margin-left: auto;\n}\n\n.people-container[_ngcontent-%COMP%] {\n    width: 30%;\n    background-color: white;\n    border: 1px solid transparent;\n    border-radius: 20px;\n    margin: 20px;\n    padding: 10px;\n    float: left;\n}\n\nh4[_ngcontent-%COMP%] {\n    font-size: large;\n    font-weight: bold;\n}\n\n.people-detail[_ngcontent-%COMP%] {\n    margin: 15px;\n}\n\n.unassign[_ngcontent-%COMP%] {\n    background-color: goldenrod;\n    outline: none;\n    border: 1px solid transparent;\n}\n\n.done[_ngcontent-%COMP%] {\n    background-color: blue;\n    outline: none;\n    border: 1px solid transparent;\n}\n\n.totest[_ngcontent-%COMP%] {\n    background-color: #ecf5ff;\n    outline: #007bff;\n    border: 2px solid #007bff;\n    color: #007bff;\n    font-weight: bold;\n}\n\n.team-table[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 20px;\n}\n\n.team-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: center;\n    border-bottom: 1px solid #dddddd;\n    padding: 20px 0 20px 0;\n}\n\n.team-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    text-align: center;\n}\n\n.team-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    border-bottom: 2px solid #dddddd;\n}\n\nh2[_ngcontent-%COMP%] {\n    margin: 20px 40px 20px 40px;\n    float: left;\n}\n\n.task-table-status[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 7px;\n    border-radius: 10px;\n    color: white;\n    text-transform: uppercase;\n}\n\n.btn[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-bottom: 10px;\n    float: right;\n}\n\n#team-list-container[_ngcontent-%COMP%] {\n    display: block;\n    margin: 30px 30px 30px 30px;\n    border: 1px solid #dddddd;\n    border-radius: 20px;\n    background-color: white;\n}\n\n.team-table-item[_ngcontent-%COMP%]:hover {\n    background-color: #f7f8f9;\n    cursor: pointer;\n    border-radius: 20px;\n}\n\n.team-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n}\n\ntbody[_ngcontent-%COMP%] {\n    display: block;\n    overflow-y: auto;\n    table-layout: fixed;\n    max-height: 300px;\n}\n\n.assign-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: blue;\n    text-decoration: underline;\n}\n\n.task-links-header[_ngcontent-%COMP%] {\n    margin: 20px 20px 0px 20px;\n}\n\n.link-container[_ngcontent-%COMP%], .link-relation-container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.link-relation-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .link-container[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n    width: 30%;\n}\n\n.link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: underline;\n}\n\n.link-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.link-container[_ngcontent-%COMP%], .link-relation-container[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n.add-button[_ngcontent-%COMP%] {\n    display: grid;\n    justify-content: end;\n}\n\n.delete-options-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n}\n\n.delete-options-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 10px;\n}\n\n\n\n\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n    z-index: 20000 !important;\n}\n\n.add-link[_ngcontent-%COMP%] {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media screen and (max-width: 1024px) {\n    .people-container[_ngcontent-%COMP%] {\n        margin: 20px 15px 0 15px;\n        width: calc(100% - 30px);\n    }\n    #task-detail-header[_ngcontent-%COMP%] {\n        padding: 15px 30px 0px 30px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyL3Rhc2stZGV0YWlsLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0E7O21DQUVtQzs7QUFHbkMsTUFBTTs7QUFFTjtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7UUFDeEIsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL3Rhc2stZGV0YWlsLWNvbnRhaW5lci90YXNrLWRldGFpbC1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YXNrLWRldGFpbC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2FzaWduLWJ1dHRvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5wZW9wbGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmg0IHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGVvcGxlLWRldGFpbCB7XG4gICAgbWFyZ2luOiAxNXB4O1xufVxuXG4udW5hc3NpZ24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uZG9uZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4udG90ZXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmNWZmO1xuICAgIG91dGxpbmU6ICMwMDdiZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmZjtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRlYW0tdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4udGVhbS10YWJsZSB0ZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XG59XG5cbi50ZWFtLXRhYmxlIHRyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZWFtLXRhYmxlIHRoIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZDtcbn1cblxuaDIge1xuICAgIG1hcmdpbjogMjBweCA0MHB4IDIwcHggNDBweDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnRhc2stdGFibGUtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbiN0ZWFtLWxpc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDMwcHggMzBweCAzMHB4IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4udGVhbS10YWJsZS1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4udGVhbS10YWJsZSB0aGVhZCB0ZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxudGhlYWQsXG50Ym9keSB0ciB7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxudGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLmFzc2lnbi1saW5rIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi50YXNrLWxpbmtzLWhlYWRlciB7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMHB4IDIwcHg7XG59XG5cbi5saW5rLWNvbnRhaW5lcixcbi5saW5rLXJlbGF0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmxpbmstcmVsYXRpb24tY29udGFpbmVyIGg2LFxuLmxpbmstY29udGFpbmVyIGg2IHtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4ubGluay1jb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5saW5rLWNvbnRhaW5lciBhOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saW5rLWNvbnRhaW5lcixcbi5saW5rLXJlbGF0aW9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4uYWRkLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmRlbGV0ZS1vcHRpb25zLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmRlbGV0ZS1vcHRpb25zLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cblxuLyogLm1kLWF1dG9jb21wbGV0ZS1zdWdnZXN0aW9ucy1jb250YWluZXIge1xuICAgIHotaW5kZXg6IDEwMDAwMCAhaW1wb3J0YW50O1xuICAgIC8qIGFueSBudW1iZXIgb2YgY2hvaWNlID4gMTA1MCovXG5cblxuLyogfSAqL1xuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiAyMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uYWRkLWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLnBlb3BsZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDIwcHggMTVweCAwIDE1cHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICB9XG4gICAgI3Rhc2stZGV0YWlsLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweCAwcHggMzBweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDetailContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-detail-container',
                templateUrl: './task-detail-container.component.html',
                styleUrls: ['./task-detail-container.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"] }, { type: src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_8__["TeamService"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: User, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class User {
}
class UserService {
    constructor(http) {
        this.http = http;
    }
    // Access user profile
    profileUser() {
        return this.http.get('http://notabot.duckdns.org:32768/api/auth/user-profile');
    }
    getUser() {
        if (this.user == null) {
            this.user = this.profileUser();
        }
        return this.user;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lIHx":
/*!**************************************!*\
  !*** ./src/app/model/team-member.ts ***!
  \**************************************/
/*! exports provided: TeamMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMember", function() { return TeamMember; });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "AEEF");

class TeamMember {
    constructor(data) {
        var _a, _b;
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.is_project_manager = data.is_project_manager;
        this.rank = data.rank;
        this.avg_task_priority = data.avg_task_priority;
        let time = (_a = data.avg_time) === null || _a === void 0 ? void 0 : _a.split(" ");
        this.avg_time = data.avg_time ? time[0] + time[1] + " " + time[2] + time[3] : data.avg_time;
        this.current_tasks = (_b = data.assignedTasks) === null || _b === void 0 ? void 0 : _b.map(val => new _task__WEBPACK_IMPORTED_MODULE_0__["Task"](val));
    }
}


/***/ }),

/***/ "mqDS":
/*!*************************************************!*\
  !*** ./src/app/shared/services/team.service.ts ***!
  \*************************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TeamService {
    constructor(http) {
        this.http = http;
    }
    getTeamMembers() {
        return this.http.get('http://notabot.duckdns.org:32768/api/users');
    }
    getAllTeamMembers() {
        return this.http.get('http://notabot.duckdns.org:32768/api/users/all');
    }
    getTeamMemberById(id) {
        return this.http.get('http://notabot.duckdns.org:32768/api/users/get/' + id);
    }
    getPage(url) {
        return this.http.get(url);
    }
}
TeamService.ɵfac = function TeamService_Factory(t) { return new (t || TeamService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TeamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamService, factory: TeamService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "mvyS":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavigationComponent {
    constructor() {
        this.uiBasicCollapsed = false;
        this.samplePagesCollapsed = false;
    }
    ngOnInit() {
        const body = document.querySelector('body');
        // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
        document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                if (body.classList.contains('sidebar-icon-only')) {
                    el.classList.add('hover-open');
                }
            });
            el.addEventListener('mouseout', function () {
                if (body.classList.contains('sidebar-icon-only')) {
                    el.classList.remove('hover-open');
                }
            });
        });
    }
    hideMenu() {
        document.getElementsByClassName("menu")[0].classList.toggle("open");
        document.getElementsByTagName("body")[0].classList.toggle("openMenu");
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 10, vars: 0, consts: [["id", "mySidenav", 1, "sidenav", 3, "click"], ["routerLink", "/dashboard", "routerLinkActive", "active"], ["aria-hidden", "true", 1, "fa", "fa-pie-chart", "fa-1"], ["routerLink", "/task-list", "routerLinkActive", "active"], ["aria-hidden", "true", 1, "fa", "fa-tasks", "fa-1"], ["routerLink", "/team-list", "routerLinkActive", "active"], ["aria-hidden", "true", 1, "fa", "fa-users", "fa-1"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationComponent_Template_div_click_0_listener() { return ctx.hideMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".sidenav[_ngcontent-%COMP%] {\n    height: 100%;\n    \n    z-index: 1;\n    \n    top: 0;\n    \n    left: 0;\n    background-color: #ffffff;\n    \n    overflow-x: hidden;\n    \n    padding-top: 60px;\n    \n    transition: 0.5s;\n    \n}\n\n\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 8px 8px 8px 32px;\n    text-decoration: none;\n    font-size: 20px;\n    color: #4d4c4c;\n    display: block;\n    transition: 0.3s;\n}\n\n\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #7215d8;\n}\n\n\n\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 25px;\n    font-size: 36px;\n    margin-left: 50px;\n}\n\n\n\n#main[_ngcontent-%COMP%] {\n    transition: margin-left .5s;\n    padding: 20px;\n}\n\n\n\n@media screen and (max-height: 450px) {\n    .sidenav[_ngcontent-%COMP%] {\n        padding-top: 15px;\n    }\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n}\n\n.active[_ngcontent-%COMP%] {\n    background-color: #f7f8f9;\n    color: #7215d8 !important;\n}\n\n.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7O0FBRTdCO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQix5REFBeUQ7QUFDN0Q7O0FBR0EsOEJBQThCOztBQUU5QjtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUdBLGlFQUFpRTs7QUFFakU7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLDJEQUEyRDs7QUFFM0Q7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUdBLHNIQUFzSDs7QUFFdEg7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFHQSxnSUFBZ0k7O0FBRWhJO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUEsa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xuXG4uc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIDEwMCUgRnVsbC1oZWlnaHQgKi9cbiAgICB6LWluZGV4OiAxO1xuICAgIC8qIFN0YXkgb24gdG9wICovXG4gICAgdG9wOiAwO1xuICAgIC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAvKiBCbGFjayovXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAvKiAwLjUgc2Vjb25kIHRyYW5zaXRpb24gZWZmZWN0IHRvIHNsaWRlIGluIHRoZSBzaWRlbmF2ICovXG59XG5cblxuLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xuXG4uc2lkZW5hdiBhIHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM0ZDRjNGM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuXG4vKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cblxuLnNpZGVuYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICM3MjE1ZDg7XG59XG5cblxuLyogUG9zaXRpb24gYW5kIHN0eWxlIHRoZSBjbG9zZSBidXR0b24gKHRvcCByaWdodCBjb3JuZXIpICovXG5cbi5zaWRlbmF2IC5jbG9zZWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMjVweDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cblxuLyogU3R5bGUgcGFnZSBjb250ZW50IC0gdXNlIHRoaXMgaWYgeW91IHdhbnQgdG8gcHVzaCB0aGUgcGFnZSBjb250ZW50IHRvIHRoZSByaWdodCB3aGVuIHlvdSBvcGVuIHRoZSBzaWRlIG5hdmlnYXRpb24gKi9cblxuI21haW4ge1xuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5cbi8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZW5hdiAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cbiAgICAuc2lkZW5hdiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbn1cblxuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmOTtcbiAgICBjb2xvcjogIzcyMTVkOCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlIGE6YWN0aXZlIHt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_container_new_task_container_new_task_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/container/new-task-container/new-task-container.component */ "vYPB");
/* harmony import */ var _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/container/overview-container/overview-container.component */ "UkxQ");
/* harmony import */ var _components_container_person_detail_container_person_detail_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/container/person-detail-container/person-detail-container.component */ "HAuM");
/* harmony import */ var _components_container_task_detail_container_task_detail_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/container/task-detail-container/task-detail-container.component */ "igSX");
/* harmony import */ var _components_container_task_list_container_task_list_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/container/task-list-container/task-list-container.component */ "+fTq");
/* harmony import */ var _components_container_task_list_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/container/task-list-container/task-list/task-list.component */ "G5JQ");
/* harmony import */ var _components_container_team_list_container_team_list_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/container/team-list-container/team-list-container.component */ "hU4Q");
/* harmony import */ var _components_container_team_list_container_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/container/team-list-container/team-list/team-list.component */ "4s7H");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/signin/signin.component */ "WnTk");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");
/* harmony import */ var _shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/guards/auth-guard.service */ "ZIhg");















const routes = [
    //todo fix repeating guard 
    { path: 'sign-in', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"], pathMatch: 'full' },
    { path: 'sign-up', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"], pathMatch: 'full' },
    { path: '', component: _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_3__["OverviewContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], pathMatch: 'full' },
    { path: 'dashboard', component: _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_3__["OverviewContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
    { path: 'task-list', component: _components_container_task_list_container_task_list_container_component__WEBPACK_IMPORTED_MODULE_6__["TaskListContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], children: [
            { path: '', component: _components_container_task_list_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__["TaskListComponent"] },
            { path: 'task-detail', component: _components_container_task_detail_container_task_detail_container_component__WEBPACK_IMPORTED_MODULE_5__["TaskDetailContainerComponent"] },
            { path: 'new-task', component: _components_container_new_task_container_new_task_container_component__WEBPACK_IMPORTED_MODULE_2__["NewTaskContainerComponent"] }
        ] },
    { path: 'team-list', component: _components_container_team_list_container_team_list_container_component__WEBPACK_IMPORTED_MODULE_8__["TeamListContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], children: [
            { path: '', component: _components_container_team_list_container_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_9__["TeamListComponent"] },
            { path: 'person-detail', component: _components_container_person_detail_container_person_detail_container_component__WEBPACK_IMPORTED_MODULE_4__["PersonDetailContainerComponent"] },
        ] },
    { path: '**', component: _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_3__["OverviewContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vYPB":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/container/new-task-container/new-task-container.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: NewTaskContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskContainerComponent", function() { return NewTaskContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");










const _c0 = ["priorityField"];
const _c1 = function (a0) { return { "active-priority": a0 }; };
class NewTaskContainerComponent {
    constructor(fb, taskService, router, datepipe, titleService) {
        this.fb = fb;
        this.taskService = taskService;
        this.router = router;
        this.datepipe = datepipe;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.taskForm = this.fb.group({
            title: [],
            priority: [],
            estimate: [],
            deadline: [],
        });
        this.titleService.setTitle("New task");
    }
    choosePriority(priority) {
        this.priority = priority;
        this.taskForm.reset({
            priority: priority,
            title: this.taskForm.value.title,
            estimate: this.taskForm.value.estimate,
            deadline: this.taskForm.value.deadline
        });
    }
    createNewTask() {
        if (!this.isDateFormated) {
            this.taskForm.value.deadline = this.datepipe.transform(new Date(this.taskForm.value.deadline), 'dd/MM/yyyy HH:mm');
            this.isDateFormated = true;
        }
        this.taskService.createTask(this.taskForm.value).subscribe(result => {
            this.router.navigate(['/task-list/task-detail'], { queryParams: { id: result.data.id } });
        }, error => {
            //todo validations
        });
    }
    onDate(event) {
        this.isDateFormated = false;
        console.log(this.taskForm.value);
    }
}
NewTaskContainerComponent.ɵfac = function NewTaskContainerComponent_Factory(t) { return new (t || NewTaskContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
NewTaskContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewTaskContainerComponent, selectors: [["app-new-task-container"]], viewQuery: function NewTaskContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.priorityField = _t.first);
    } }, decls: 35, vars: 13, consts: [[1, "new-task-container"], [3, "formGroup", "ngSubmit"], [1, "fields-container"], [1, "field", "task-title"], ["type", "text", "formControlName", "title", 1, "text-input", "form-control"], [1, "other-fields"], [1, "field", "task-priority"], ["hidden", "", "formControlName", "priority", 1, "form-control", 3, "value"], ["priorityField", ""], [1, "task-priority-values"], [1, "task-table-status", "low", 3, "ngClass", "click"], [1, "task-table-status", "medium", 3, "ngClass", "click"], [1, "task-table-status", "high", 3, "ngClass", "click"], [1, "field", "task-estimate"], ["type", "text", "formControlName", "estimate", 1, "text-input", "form-control", "estimate"], [1, "field", "task-deadline"], ["matInput", "", "formControlName", "deadline", 1, "form-control", 3, "matDatepicker", "dateInput"], ["matSuffix", "", 3, "for"], [3, "dateChange"], ["picker", ""], [1, "right-button-container"], ["type", "submit", 1, "add-button"]], template: function NewTaskContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewTaskContainerComponent_Template_form_ngSubmit_1_listener() { return ctx.createNewTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTaskContainerComponent_Template_div_click_14_listener() { return ctx.choosePriority("low"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTaskContainerComponent_Template_div_click_16_listener() { return ctx.choosePriority("medium"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "MEDIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewTaskContainerComponent_Template_div_click_18_listener() { return ctx.choosePriority("high"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Estimate hour budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateInput", function NewTaskContainerComponent_Template_input_dateInput_28_listener($event) { return ctx.onDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-datepicker-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-datepicker", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function NewTaskContainerComponent_Template_mat_datepicker_dateChange_30_listener($event) { return ctx.onDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.taskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.priority == "low"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.priority == "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.priority == "high"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"]], styles: [".new-task-container[_ngcontent-%COMP%] {\n    margin: auto;\n    background-color: white;\n    border: 0.5px solid lightgrey;\n    border-radius: 10px;\n    width: 80%;\n    height: auto;\n    margin: 50px auto 50px auto;\n}\n\n.text-input[_ngcontent-%COMP%], .text-input[_ngcontent-%COMP%]:active {\n    border: none;\n    border-bottom: solid 1px gray;\n    background: none;\n    outline: none;\n    width: 100%;\n}\n\n.field[_ngcontent-%COMP%] {\n    margin: 40px;\n}\n\n.field[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.task-deadline[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n}\n\n.fields-container[_ngcontent-%COMP%] {\n    margin: auto;\n}\n\n.right-button-container[_ngcontent-%COMP%] {\n    text-align: right;\n}\n\n.add-button[_ngcontent-%COMP%] {\n    margin: 10px 50px 30px 0px;\n    background-color: #7215d8;\n    border: none;\n    color: white;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    outline: none;\n    font-size: larger;\n}\n\n.task-table-status[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 7px;\n    border-radius: 10px;\n    color: white;\n    text-transform: uppercase;\n    margin: 10px;\n    text-align: center;\n}\n\n.task-table-status[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.task-priority-values[_ngcontent-%COMP%] {\n    display: grid;\n    justify-content: space-between;\n}\n\n.active-priority[_ngcontent-%COMP%] {\n    border: 3px solid darkslategrey;\n}\n\n  .mat-input-underline {\n    visibility: visible;\n    z-index: -999;\n    display: block;\n}\n\n.other-fields[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.estimate[_ngcontent-%COMP%] {\n    margin-top: 40px;\n}\n\n@media screen and (max-width: 1024px) {\n    .new-task-container[_ngcontent-%COMP%] {\n        margin: 15px 30px 15px 15px;\n        width: calc(100% - 30px);\n    }\n    .field[_ngcontent-%COMP%] {\n        margin: 20px;\n    }\n    .other-fields[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .estimate[_ngcontent-%COMP%] {\n        margin-top: 0;\n    }\n    .mat-form-field[_ngcontent-%COMP%] {\n        width: calc(100%);\n    }\n    .task-priority-values[_ngcontent-%COMP%] {\n        display: block;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvbmV3LXRhc2stY29udGFpbmVyL25ldy10YXNrLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvbmV3LXRhc2stY29udGFpbmVyL25ldy10YXNrLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy10YXNrLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gNTBweCBhdXRvO1xufVxuXG4udGV4dC1pbnB1dCxcbi50ZXh0LWlucHV0OmFjdGl2ZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmF5O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkIHtcbiAgICBtYXJnaW46IDQwcHg7XG59XG5cbi5maWVsZCBoNCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRhc2stZGVhZGxpbmUge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5maWVsZHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodC1idXR0b24tY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFkZC1idXR0b24ge1xuICAgIG1hcmdpbjogMTBweCA1MHB4IDMwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjE1ZDg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLnRhc2stdGFibGUtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzay10YWJsZS1zdGF0dXM6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stcHJpb3JpdHktdmFsdWVzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFjdGl2ZS1wcmlvcml0eSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgZGFya3NsYXRlZ3JleTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaW5wdXQtdW5kZXJsaW5lIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHotaW5kZXg6IC05OTk7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vdGhlci1maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lc3RpbWF0ZSB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLm5ldy10YXNrLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMTVweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIH1cbiAgICAuZmllbGQge1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxuICAgIC5vdGhlci1maWVsZHMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmVzdGltYXRlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSk7XG4gICAgfVxuICAgIC50YXNrLXByaW9yaXR5LXZhbHVlcyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTaskContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-task-container',
                templateUrl: './new-task-container.component.html',
                styleUrls: ['./new-task-container.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }]; }, { priorityField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['priorityField']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zoOI":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/container/task-detail-container/task-overview/task-overview.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: TaskOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskOverviewComponent", function() { return TaskOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/enum/status.enum */ "0jXk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TaskOverviewComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskOverviewComponent_span_12_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.editEstimate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskOverviewComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskOverviewComponent_span_15_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.editDeadline(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskOverviewComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskOverviewComponent_div_27_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.saveEstimate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.estimateGroup);
} }
function TaskOverviewComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.task == null ? null : ctx_r3.task.estimate, " hours ");
} }
function TaskOverviewComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskOverviewComponent_div_30_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.saveDeadline(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.deadlineGroup);
} }
const _c0 = function (a0) { return { "after-deadline-warning": a0 }; };
function TaskOverviewComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r5.isAfterDeadline));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.task == null ? null : ctx_r5.task.deadline.split(" ")[0], " ");
} }
function TaskOverviewComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskOverviewComponent_span_38_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.editDescription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskOverviewComponent_p_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.task == null ? null : ctx_r8.task.description);
} }
function TaskOverviewComponent_textarea_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.task == null ? null : ctx_r9.task.description);
} }
function TaskOverviewComponent_button_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TaskOverviewComponent {
    constructor(formBuilder, taskService, datepipe) {
        this.formBuilder = formBuilder;
        this.taskService = taskService;
        this.datepipe = datepipe;
        //enums
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__["Priority"];
        this.status = src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__["Status"];
    }
    ngOnInit() {
        var _a, _b, _c;
        this.descritionGroup = this.formBuilder.group({
            description: (_a = this.task) === null || _a === void 0 ? void 0 : _a.description
        });
        this.deadlineGroup = this.formBuilder.group({
            deadline: (_b = this.task) === null || _b === void 0 ? void 0 : _b.deadline
        });
        this.estimateGroup = this.formBuilder.group({
            estimate: (_c = this.task) === null || _c === void 0 ? void 0 : _c.estimate
        });
        this.isDeadlineValid();
    }
    editDescription() {
        this.isDescriptionEditMode = !this.isDescriptionEditMode;
    }
    editDeadline() {
        this.isDeadlineEditMode = !this.isDeadlineEditMode;
    }
    editEstimate() {
        this.isEstimateEditMode = !this.isEstimateEditMode;
    }
    saveDeadline() {
        let date = this.datepipe.transform(new Date(this.deadlineGroup.value.deadline), 'dd/MM/yyyy HH:mm');
        this.taskService.updateTask(this.task.id, { "deadline": date }).subscribe(result => {
            this.task.deadline = this.datepipe.transform(new Date(result.data.deadline), 'yyyy-MM-dd');
            this.isDeadlineEditMode = false;
            this.isDeadlineValid();
            console.log(this.task.deadline);
        });
    }
    saveDescription() {
        this.taskService.updateTask(this.task.id, { "description": this.descritionGroup.value.description }).subscribe(result => {
            this.task.description = result.data.description;
            this.isDescriptionEditMode = false;
        });
    }
    saveEstimate() {
        this.taskService.updateTask(this.task.id, { "estimate": this.estimateGroup.value.estimate }).subscribe(result => {
            this.task.estimate = result.data.estimate;
            this.isEstimateEditMode = false;
        });
    }
    isDeadlineValid() {
        this.isAfterDeadline = new Date(this.task.deadline).getTime() < new Date().getTime();
    }
}
TaskOverviewComponent.ɵfac = function TaskOverviewComponent_Factory(t) { return new (t || TaskOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"])); };
TaskOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskOverviewComponent, selectors: [["app-task-overview"]], inputs: { task: "task", user: "user" }, decls: 43, vars: 20, consts: [[1, "overview"], [1, "overview-table"], ["class", "fa fa-pencil edit", 3, "click", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "task-description-container"], [3, "formGroup", "ngSubmit"], ["descriptionForm", ""], [1, "task-description-title"], [1, "task-description-content"], ["class", "description-area", "formControlName", "description", "rows", "10", "value", "task?.description", 4, "ngIf"], ["type", "submit", 4, "ngIf"], [1, "fa", "fa-pencil", "edit", 3, "click"], ["type", "number", "formControlName", "estimate", "name", "estimate", "min", "1", "max", "200"], ["type", "submit"], ["type", "date", "formControlName", "deadline", "name", "deadline"], [3, "ngClass"], ["editDeadlineField", ""], ["formControlName", "description", "rows", "10", "value", "task?.description", 1, "description-area"]], template: function TaskOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskOverviewComponent_span_12_Template, 1, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Deadline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskOverviewComponent_span_15_Template, 1, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TaskOverviewComponent_div_27_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TaskOverviewComponent_p_28_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TaskOverviewComponent_div_30_Template, 4, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TaskOverviewComponent_p_31_Template, 3, 4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskOverviewComponent_Template_form_ngSubmit_33_listener() { return ctx.saveDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TaskOverviewComponent_span_38_Template, 1, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TaskOverviewComponent_p_40_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TaskOverviewComponent_textarea_41_Template, 2, 1, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TaskOverviewComponent_button_42_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.id) == (ctx.task == null ? null : ctx.task.creator == null ? null : ctx.task.creator.id) && !ctx.isEstimateEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.id) == (ctx.task == null ? null : ctx.task.creator == null ? null : ctx.task.creator.id) && !ctx.isDeadlineEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", ctx.task == null ? null : ctx.task.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.status[ctx.task == null ? null : ctx.task.status]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", ctx.task == null ? null : ctx.task.priority, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.priority[ctx.task == null ? null : ctx.task.priority]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.rank == null ? "0/5" : ctx.task.rank + "/5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEstimateEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEstimateEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDeadlineEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDeadlineEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.descritionGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.id) == (ctx.task == null ? null : ctx.task.creator == null ? null : ctx.task.creator.id) && !ctx.isDescriptionEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isDescriptionEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDescriptionEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDescriptionEditMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".overview[_ngcontent-%COMP%] {\n    border: 1px solid transparent;\n    border-radius: 20px;\n    background-color: white;\n    padding: 20px;\n    margin: 0px 20px;\n}\n\n.overview-table[_ngcontent-%COMP%] {\n    width: 100%;\n    table-layout: fixed;\n}\n\n.overview-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    text-align: left;\n    font-weight: bold;\n}\n\n.task-table-status[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 0 7px;\n    border-radius: 10px;\n    color: white;\n}\n\n.task-description-container[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n\n.task-description-title[_ngcontent-%COMP%] {\n    font-size: large;\n    font-weight: bold;\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n}\n\n.description-area[_ngcontent-%COMP%] {\n    width: 80%;\n}\n\n.after-deadline-warning[_ngcontent-%COMP%] {\n    color: #CC0000;\n}\n\n@media screen and (max-width: 1024px) {\n    .overview[_ngcontent-%COMP%] {\n        margin: 0px 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyL3Rhc2stb3ZlcnZpZXcvdGFzay1vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci90YXNrLWRldGFpbC1jb250YWluZXIvdGFzay1vdmVydmlldy90YXNrLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcnZpZXcge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xufVxuXG4ub3ZlcnZpZXctdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5vdmVydmlldy10YWJsZSB0aGVhZCB0ciB0ZCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhc2stdGFibGUtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi50YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRhc2stZGVzY3JpcHRpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lZGl0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbi1hcmVhIHtcbiAgICB3aWR0aDogODAlO1xufVxuXG4uYWZ0ZXItZGVhZGxpbmUtd2FybmluZyB7XG4gICAgY29sb3I6ICNDQzAwMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIC5vdmVydmlldyB7XG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-overview',
                templateUrl: './task-overview.component.html',
                styleUrls: ['./task-overview.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map