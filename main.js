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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["#container[_ngcontent-%COMP%]{\r\n  background-color: #F2EDF3;\r\n  height: calc(100vh - 50px); \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1saXN0LWNvbnRhaW5lci90YXNrLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCLEVBQUUsZ0JBQWdCO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1saXN0LWNvbnRhaW5lci90YXNrLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkVERjM7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7IC8qNTBweCA9IGhlYWRlciovXHJcbn0iXX0= */"] });
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

module.exports = __webpack_require__(/*! D:\boardy\Boardy\frontend\src\main.ts */"zUnb");


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
    } }, styles: ["#container[_ngcontent-%COMP%]{\r\n    background-color: #F2EDF3;\r\n    height: calc(100vh - 50px); \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCLEVBQUUsZ0JBQWdCO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRURGMztcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpOyAvKjUwcHggPSBoZWFkZXIqL1xyXG59Il19 */"] });
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["#title[_ngcontent-%COMP%] {\r\n    color: #7215d8;\r\n    font-size: xx-large;\r\n    padding: 5px 5px 5px 30px;\r\n}\r\n\r\n#header-content[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.fa-power-off[_ngcontent-%COMP%] {\r\n    color: grey;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n}\r\n\r\n#signout-container[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    float: right;\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n#signout-container[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n#userName[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    float: right;\r\n    margin-top: 12px;\r\n    margin-right: 12px;\r\n}\r\n\r\nb[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n    float:left;\r\n    cursor: pointer;\r\n    padding: 5px 5px 5px 12px;\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]:hover   .bar1[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]:hover   .bar2[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%]:hover   .bar3[_ngcontent-%COMP%] {\r\n    background-color: #7215d8;\r\n}\r\n\r\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\r\n    width: 30px;\r\n    height: 5px;\r\n    background-color: #4d4c4c;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n}\r\n\r\n\r\n\r\n.open[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\r\n    transform: rotate(-45deg) translate(-9px, 6px) ;\r\n}\r\n\r\n\r\n\r\n.open[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n\r\n\r\n\r\n.open[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\r\n    transform: rotate(45deg) translate(-8px, -8px) ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVFLHFCQUFxQjs7QUFDdkI7SUFFSSwrQ0FBK0M7QUFDbkQ7O0FBRUUsNEJBQTRCOztBQUM5QjtJQUNJLFVBQVU7QUFDZDs7QUFFRSxvQkFBb0I7O0FBQ3RCO0lBRUksK0NBQStDO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0bGUge1xyXG4gICAgY29sb3I6ICM3MjE1ZDg7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMzBweDtcclxufVxyXG5cclxuI2hlYWRlci1jb250ZW50IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmEtcG93ZXItb2ZmIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uZmEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4jc2lnbm91dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuI3NpZ25vdXQtY29udGFpbmVyOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3VzZXJOYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbmI6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggMTJweDtcclxufVxyXG5cclxuLm1lbnU6aG92ZXIgLmJhcjEsIC5tZW51OmhvdmVyIC5iYXIyLCAubWVudTpob3ZlciAuYmFyMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIxNWQ4O1xyXG59XHJcbiAgXHJcbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDRjNGM7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG4gIFxyXG4gIC8qIFJvdGF0ZSBmaXJzdCBiYXIgKi9cclxuLm9wZW4gLmJhcjEge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpIDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCkgO1xyXG59XHJcbiAgXHJcbiAgLyogRmFkZSBvdXQgdGhlIHNlY29uZCBiYXIgKi9cclxuLm9wZW4gLmJhcjIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4gIFxyXG4gIC8qIFJvdGF0ZSBsYXN0IGJhciAqL1xyXG4ub3BlbiAuYmFyMyB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCkgO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KSA7XHJcbn0iXX0= */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r3.rank == null ? "0/5" : person_r3.rank + "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", person_r3.avg_task_priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.priority[person_r3.avg_task_priority]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r3.numberOfAssignedTasks);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Current # of tasks");
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".team-table[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-top: 28px;\r\n    height: calc(100% - 30px - 124px);\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-top: -28px;\r\n    display: inline-block;\r\n    width: calc(100% - 200px - 62px);\r\n    background-color: white;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0 20px 0;\r\n    display: inline-block;\r\n    width: 25%;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #dddddd;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 25%;\r\n    \r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 20px 40px 20px 40px;\r\n    float: left;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#team-list-container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 30px 30px 30px 30px;\r\n    height: calc(100% - 60px);\r\n    border: 1px solid #dddddd;\r\n    border-radius: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.team-table-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f7f8f9;\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination-links[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #7215d8;\r\n    float: left;\r\n    padding: 2px 16px 8px 16px;\r\n    text-decoration: none;\r\n    font-size: x-large;\r\n    transition: background-color .3s;\r\n  }\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n@media screen and (max-width: 1024px) {\r\n\r\n    thead[_ngcontent-%COMP%] {\r\n        width: calc(100% - 32px) !important;\r\n        overflow: hidden;\r\n    }\r\n  \r\n    .team-table[_ngcontent-%COMP%]{\r\n        overflow-x: auto;\r\n        height: calc(100% - 30px - 113px);\r\n    }\r\n  \r\n    tr[_ngcontent-%COMP%] {\r\n        min-width: 500px;\r\n    }\r\n\r\n    #team-list-container[_ngcontent-%COMP%] {\r\n        height: calc(100% - 45px);\r\n        margin: 15px 15px 30px 15px;\r\n    }\r\n\r\n    h2[_ngcontent-%COMP%] {\r\n        margin: 15px 30px 15px 30px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGVhbS1saXN0LWNvbnRhaW5lci90ZWFtLWxpc3QvdGVhbS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTs7QUFFZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUE7O0lBRUU7UUFDSSxtQ0FBbUM7UUFDbkMsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci90ZWFtLWxpc3QtY29udGFpbmVyL3RlYW0tbGlzdC90ZWFtLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtLXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAxMjRweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4IC0gNjJweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGJvZHkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50ZWFtLXRhYmxlIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4udGVhbS10YWJsZSB0ciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRlYW0tdGFibGUgdGJvZHkgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuXHJcbi50ZWFtLXRhYmxlIHRoZWFkIHRyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcblxyXG4udGVhbS10YWJsZSB0aCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgXHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMjBweCA0MHB4IDIwcHggNDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGFzay10YWJsZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuI3RlYW0tbGlzdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDMwcHggMzBweCAzMHB4IDMwcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRlYW0tdGFibGUtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1saW5rcyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICAgIGNvbG9yOiAjNzIxNWQ4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAycHggMTZweCA4cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG4gIH1cclxuICBcclxuICAucGFnaW5hdGlvbiBhIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cclxuICAgIHRoZWFkIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCkgIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRlYW0tdGFibGV7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAxMTNweCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0ciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAjdGVhbS1saXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcclxuICAgICAgICBtYXJnaW46IDE1cHggMTVweCAzMHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcclxuICAgIH1cclxuXHJcbn0iXX0= */"] });
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







function SignupComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errors == null ? null : ctx_r0.errors.email, " ");
} }
function SignupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errors == null ? null : ctx_r1.errors.password, " ");
} }
function SignupComponent_div_4_Template(rf, ctx) { if (rf & 1) {
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
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 23, vars: 4, consts: [["id", "auth-wrapper"], [3, "formGroup", "ngSubmit"], ["class", "alert alert-danger mt-3", 4, "ngIf"], ["id", "title"], [1, "form-item"], [1, "fa", "fa-user", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "name", "type", "text", "placeholder", "name", 1, "form-control"], [1, "fa", "fa-at", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "email", "type", "text", "placeholder", "email", 1, "form-control"], [1, "fa", "fa-lock", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "password", "type", "password", "placeholder", "password", 1, "form-control"], ["formControlName", "password_confirmation", "type", "password", "placeholder", "confirm password", 1, "form-control"], ["id", "submit-button", "type", "submit", 1, "btn", "btn-block", "btn-primary"], ["routerLink", "/sign-in"], [1, "alert", "alert-danger", "mt-3"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SignupComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_div_4_Template, 2, 1, "div", 2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#auth-wrapper[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 30%;\r\n    \r\n    padding: 30px;\r\n    height: 50vh;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    justify-content: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: solid 1px gray;\r\n    background: none;\r\n    margin-left: 5px;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    color: #7215d8;\r\n    font-size: xx-large;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#submit-button[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background-color: #7215d8;\r\n    border: none;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    font-size: smaller;\r\n    color: darkslategrey;\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   .form-item[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdXRoLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNGMkVERjM7ICovXHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGNvbG9yOiAjNzIxNWQ4O1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNzdWJtaXQtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIxNWQ4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiBkYXJrc2xhdGVncmV5O1xyXG59XHJcblxyXG5kaXYgLmZvcm0taXRlbSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */"] });
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












function TaskListComponent_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", member_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r4.name, " ");
} }
function TaskListComponent_tr_81_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function TaskListComponent_tr_81_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_tr_81_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const task_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showTaskDetail(task_r5 == null ? null : task_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskListComponent_tr_81_ng_template_9_Template, 1, 0, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 43);
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
function TaskListComponent_a_84_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_a_84_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskListComponent_a_85_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskListComponent_a_85_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.nextPage(); });
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
            assignee: "",
            title: ""
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
            (this.filter.assignee ? "&assignee[]=" + this.filter.assignee : "") +
            (this.filter.title ? "&title=" + this.filter.title : "");
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
            case "task-filter-title":
                if (this.filter.title != target.value) {
                    wasChange = true;
                }
                this.filter.title = target.value;
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
            "title": (this.filter.title && this.filter.title != "" ? this.filter.title : undefined)
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
TaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskListComponent, selectors: [["app-task-list"]], decls: 86, vars: 10, consts: [[1, "right-button-container"], [1, "add-button", 3, "click"], ["id", "task-list-container"], [1, "task-filter-button", 3, "click"], [1, "common-filters_container"], ["type", "radio", "id", "all", "value", "", "name", "status", "checked", "", 3, "change"], ["for", "all", 1, "radio-label"], ["type", "radio", "id", "free", "value", "free", "name", "status", 1, "radio-button", 3, "change"], ["for", "free", 1, "radio-label"], ["type", "radio", "id", "in-progress", "value", "in_progress", "name", "status", 1, "radio-button", 3, "change"], ["for", "in-progress", 1, "radio-label"], ["type", "radio", "id", "test", "value", "to_test", "name", "status", 1, "radio-button", 3, "change"], ["for", "test", 1, "radio-label"], ["type", "radio", "id", "done", "value", "done", "name", "status", 1, "radio-button", 3, "change"], ["for", "done", 1, "radio-label"], [3, "ngClass"], [1, "task-filter-option"], ["for", "task-filter-title"], ["id", "task-filter-title", "type", "text", 3, "input"], ["for", "task-filter-status"], ["id", "task-filter-status", 3, "change"], ["value", ""], ["value", "free"], ["value", "in_progress"], ["value", "to_test"], ["value", "done"], ["for", "task-filter-assignee"], ["id", "task-filter-assignee", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "task-filter-prio"], ["id", "task-filter-prio", 3, "change"], ["value", "low"], ["value", "medium"], ["value", "high"], [3, "ngClass", "scroll"], ["class", "task-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-links"], [3, "click", 4, "ngIf"], [3, "value"], [1, "task-table-item", 3, "click"], [1, "task-table-title"], ["empty", ""], [1, "task-table-deadline"], [3, "click"]], template: function TaskListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TaskListComponent_Template_input_input_30_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_select_change_35_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "FREE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "IN PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "TO TEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_select_change_50_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TaskListComponent_option_53_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskListComponent_Template_select_change_58_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "MEDIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TaskListComponent_Template_table_scroll_67_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Deadline/Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, TaskListComponent_tr_81_Template, 18, 12, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, TaskListComponent_a_84_Template, 4, 0, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, TaskListComponent_a_85_Template, 4, 0, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.showFilter === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.showFilter === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.prev != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.next != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]], styles: [".task-table[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: calc(100% - 30px - 124px - 30px);\r\n    margin-top: 28px;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.task-table-filter[_ngcontent-%COMP%] {\r\n    height: calc(100% - 30px - 200px - 36px);\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-top: -28px;\r\n    display: inline-block;\r\n    width: calc(100% - 200px - 62px);\r\n    background-color: white;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0 20px 0;\r\n    display: inline-block;\r\n    width: 20%;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #dddddd;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 20%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 20px 40px 20px 40px;\r\n    float: left;\r\n}\r\n\r\n.task-filter-button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 20px 20px 20px 20px;\r\n    cursor: pointer;\r\n    color: #7215d8;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-filter[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: calc(100% - 80px);\r\n    margin: 0 40px 0 40px;\r\n    padding: 0 0 20px 0;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.task-filter-option[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 40px;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.task-table-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f7f8f9;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-table-title[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding-left: 15px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first {\r\n    text-align: left !important;\r\n}\r\n\r\n.right-button-container[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n\r\n.add-button[_ngcontent-%COMP%] {\r\n    margin: 10px 30px 10px 10px;\r\n    background-color: #7215d8;\r\n    border: none;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n    border-radius: 5px;\r\n    outline: none;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #7215d8;\r\n    float: left;\r\n    padding: 2px 16px 8px 16px;\r\n    text-decoration: none;\r\n    font-size: x-large;\r\n    transition: background-color .3s;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n#task-list-container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 0 30px 30px 30px;\r\n    height: calc(100% - 30px - 48px);\r\n    border: 1px solid #dddddd;\r\n    border-radius: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.pagination-links[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.task-table-deadline[_ngcontent-%COMP%] {\r\n    padding: 0 !important;\r\n}\r\n\r\n.common-filters_container[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-left: 30px;\r\n}\r\n\r\n.radio-label[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n}\r\n\r\n.radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    thead[_ngcontent-%COMP%] {\r\n        width: calc(100% - 32px) !important;\r\n        overflow: hidden;\r\n    }\r\n    .task-table[_ngcontent-%COMP%] {\r\n        overflow-x: auto;\r\n        height: calc(100% - 30px - 113px - 30px);\r\n    }\r\n    tr[_ngcontent-%COMP%] {\r\n        min-width: 600px;\r\n    }\r\n    .task-filter-option[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .task-table-filter[_ngcontent-%COMP%] {\r\n        height: calc(100% - 30px - 200px - 112px - 82px);\r\n    }\r\n    #task-list-container[_ngcontent-%COMP%] {\r\n        height: calc(100% - 30px - 48px);\r\n        margin: 0 15px 30px 15px;\r\n    }\r\n    h2[_ngcontent-%COMP%] {\r\n        margin: 15px 30px 15px 30px;\r\n    }\r\n    .common-filters_container[_ngcontent-%COMP%] {\r\n        margin-left: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1saXN0LWNvbnRhaW5lci90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsd0NBQXdDO0lBQ3hDLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLG1DQUFtQztRQUNuQyxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQix3Q0FBd0M7SUFDNUM7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0RBQWdEO0lBQ3BEO0lBQ0E7UUFDSSxnQ0FBZ0M7UUFDaEMsd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1saXN0LWNvbnRhaW5lci90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAxMjRweCAtIDMwcHgpO1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhc2stdGFibGUtZmlsdGVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDIwMHB4IC0gMzZweCk7XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4IC0gNjJweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGJvZHkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4udGFzay10YWJsZSB0ciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGJvZHkgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRoZWFkIHRyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcblxyXG4udGFzay10YWJsZSB0aCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBtYXJnaW46IDIwcHggNDBweCAyMHB4IDQwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRhc2stZmlsdGVyLWJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzcyMTVkODtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGFzay1maWx0ZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgICBtYXJnaW46IDAgNDBweCAwIDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50YXNrLWZpbHRlci1vcHRpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udGFzay10YWJsZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRhc2stdGFibGUtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay10YWJsZS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGhlYWQgdHIgdGg6Zmlyc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMTVkODtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjb2xvcjogIzcyMTVkODtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHggOHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbiN0YXNrLWxpc3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIDMwcHggMzBweCAzMHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4IC0gNDhweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1saW5rcyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay10YWJsZS1kZWFkbGluZSB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb21tb24tZmlsdGVyc19jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC50YXNrLXRhYmxlIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDExM3B4IC0gMzBweCk7XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcclxuICAgIH1cclxuICAgIC50YXNrLWZpbHRlci1vcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnRhc2stdGFibGUtZmlsdGVyIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAyMDBweCAtIDExMnB4IC0gODJweCk7XHJcbiAgICB9XHJcbiAgICAjdGFzay1saXN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4IC0gNDhweCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1cHggMzBweCAxNXB4O1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcclxuICAgIH1cclxuICAgIC5jb21tb24tZmlsdGVyc19jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person == null ? null : ctx.person.rank);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: ["#person-detail-header[_ngcontent-%COMP%] {\r\n    padding: 30px 30px 0px 30px;\r\n    display: inline-flex;\r\n    width: 100%;\r\n}\r\n\r\n.overview[_ngcontent-%COMP%] {\r\n    border: 1px solid transparent;\r\n    border-radius: 20px;\r\n    background-color: white;\r\n    padding: 20px;\r\n    margin: 0px 20px;\r\n}\r\n\r\n.overview-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.overview-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-table-title[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-table-item[_ngcontent-%COMP%]:hover{\r\n    background-color: #f7f8f9;\r\n    cursor: pointer;\r\n  }\r\n\r\n.person-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n}\r\n\r\n.person-description-container[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n}\r\n\r\n.person-description-title[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-container[_ngcontent-%COMP%] {\r\n    width: 45%;\r\n    background-color: white;\r\n    border: 1px solid transparent;\r\n    border-radius: 20px;\r\n    margin: 20px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: bold;\r\n    margin: 5px 10px 10px 10px;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-top: 20px;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    border-bottom: 1px solid #dddddd;\r\n    padding: 20px 0 20px 0;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #dddddd;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n}\r\n\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    overflow-y: auto;\r\n    table-layout: fixed;\r\n    max-height: 300px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .task-container[_ngcontent-%COMP%] {\r\n        width: calc(100% - 30px);\r\n        margin: 20px 15px 20px 15px;\r\n    }\r\n\r\n    #person-detail-header[_ngcontent-%COMP%] {\r\n        padding: 15px 30px 0px 30px;\r\n    }\r\n\r\n    .overview[_ngcontent-%COMP%] {\r\n        margin: 0px 15px;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvcGVyc29uLWRldGFpbC1jb250YWluZXIvcGVyc29uLWRldGFpbC1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtFQUNqQjs7QUFFRjtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtRQUN4QiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci9wZXJzb24tZGV0YWlsLWNvbnRhaW5lci9wZXJzb24tZGV0YWlsLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BlcnNvbi1kZXRhaWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vdmVydmlldyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4O1xyXG59XHJcblxyXG4ub3ZlcnZpZXctdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5vdmVydmlldy10YWJsZSB0aGVhZCB0ciB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4udGFzay10YWJsZS1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmOTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4ucGVyc29uLXRhYmxlLXN0YXR1cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wZXJzb24tZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5wZXJzb24tZGVzY3JpcHRpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGFzay1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDVweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5cclxuLnRhc2stdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG4udGFzay10YWJsZSB0ciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRoIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcblxyXG4udGFzay10YWJsZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50aGVhZCxcclxudGJvZHkgdHIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAudGFzay1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICBtYXJnaW46IDIwcHggMTVweCAyMHB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3BlcnNvbi1kZXRhaWwtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHggMHB4IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJ2aWV3IHtcclxuICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */"] });
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
    } }, styles: ["footer[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 2px;\r\n    right: 50px;\r\n    font-size: 0.9em;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    color: #7215d8;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgY29sb3I6ICM3MjE1ZDg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"] });
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../header/header.component */ "2MiI");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../navigation/navigation.component */ "mvyS");
/* harmony import */ var _assigned_list_assigned_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assigned-list/assigned-list.component */ "vdog");
/* harmony import */ var _created_list_created_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./created-list/created-list.component */ "scWw");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../footer/footer.component */ "LmEr");








class OverviewContainerComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        this.titleService.setTitle("Overview");
    }
}
OverviewContainerComponent.ɵfac = function OverviewContainerComponent_Factory(t) { return new (t || OverviewContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
OverviewContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewContainerComponent, selectors: [["app-overview-container"]], decls: 6, vars: 0, consts: [["id", "container"]], template: function OverviewContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-assigned-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-created-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _assigned_list_assigned_list_component__WEBPACK_IMPORTED_MODULE_4__["AssignedListComponent"], _created_list_created_list_component__WEBPACK_IMPORTED_MODULE_5__["CreatedListComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["app-assigned-list[_ngcontent-%COMP%], app-created-list[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    float: left;\r\n    height: calc(100%);\r\n}\r\n\r\n#container[_ngcontent-%COMP%] {\r\n    background-color: #F2EDF3;\r\n    height: calc(100vh - 50px);\r\n    \r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    app-assigned-list[_ngcontent-%COMP%], app-created-list[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: auto;\r\n        max-height: 600px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvb3ZlcnZpZXctY29udGFpbmVyL292ZXJ2aWV3LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTs7UUFFSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvb3ZlcnZpZXctY29udGFpbmVyL292ZXJ2aWV3LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWFzc2lnbmVkLWxpc3QsXHJcbmFwcC1jcmVhdGVkLWxpc3Qge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUpO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkVERjM7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcclxuICAgIC8qNTBweCA9IGhlYWRlciovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgYXBwLWFzc2lnbmVkLWxpc3QsXHJcbiAgICBhcHAtY3JlYXRlZC1saXN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-overview-container',
                templateUrl: './overview-container.component.html',
                styleUrls: ['./overview-container.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


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









function SigninComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errors == null ? null : ctx_r0.errors.email, " ");
} }
function SigninComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errors == null ? null : ctx_r1.errors.password, " ");
} }
function SigninComponent_div_4_Template(rf, ctx) { if (rf & 1) {
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
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 17, vars: 4, consts: [["id", "auth-wrapper"], [3, "formGroup", "ngSubmit"], ["class", "alert alert-danger mt-3", 4, "ngIf"], ["id", "title"], ["id", "email-container"], [1, "fa", "fa-user", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "email", "type", "text", "placeholder", "email", 1, "form-control"], ["id", "password-container"], [1, "fa", "fa-lock", "absolute", "text-primarycolor", "text-xl"], ["formControlName", "password", "type", "password", "placeholder", "password", 1, "form-control"], ["id", "submit-button", "type", "submit", 1, "btn", "btn-block", "btn-primary"], ["routerLink", "/sign-up"], [1, "alert", "alert-danger", "mt-3"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SigninComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SigninComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SigninComponent_div_4_Template, 2, 1, "div", 2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors == null ? null : ctx.errors.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#auth-wrapper[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 30%;\r\n    \r\n    padding: 30px;\r\n    height: 50vh;\r\n}\r\n\r\n#email-container[_ngcontent-%COMP%], #password-container[_ngcontent-%COMP%] {\r\n    margin: 10px;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    justify-content: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-bottom: solid 1px gray;\r\n    background: none;\r\n    margin-left: 5px;\r\n}\r\n\r\n#title[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    color: #7215d8;\r\n    font-size: xx-large;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#submit-button[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    background-color: #7215d8;\r\n    border: none;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    font-size: smaller;\r\n    color: darkslategrey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXV0aC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFREYzOyAqL1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuI2VtYWlsLWNvbnRhaW5lcixcclxuI3Bhc3N3b3JkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JheTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgY29sb3I6ICM3MjE1ZDg7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI3N1Ym1pdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjE1ZDg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyZXk7XHJcbn0iXX0= */"] });
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
/* harmony import */ var _components_container_overview_container_assigned_list_assigned_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/container/overview-container/assigned-list/assigned-list.component */ "vdog");
/* harmony import */ var _components_container_overview_container_created_list_created_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/container/overview-container/created-list/created-list.component */ "scWw");




































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
            _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"]
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
        _components_container_task_detail_container_subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_32__["SubtaskListComponent"],
        _components_container_overview_container_assigned_list_assigned_list_component__WEBPACK_IMPORTED_MODULE_33__["AssignedListComponent"],
        _components_container_overview_container_created_list_created_list_component__WEBPACK_IMPORTED_MODULE_34__["CreatedListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"]] }); })();
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
                    _components_container_task_detail_container_subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_32__["SubtaskListComponent"],
                    _components_container_overview_container_assigned_list_assigned_list_component__WEBPACK_IMPORTED_MODULE_33__["AssignedListComponent"],
                    _components_container_overview_container_created_list_created_list_component__WEBPACK_IMPORTED_MODULE_34__["CreatedListComponent"]
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
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_30__["MatNativeDateModule"]
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
        if (this.tokenService.isLoggedIn()) {
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
        if (!this.tokenService.isValidToken()) {
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
    getTaskByTitle(keyword) {
        return this.http.get('http://notabot.duckdns.org:32768/api/tasks', { params: { title: keyword } });
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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["#container[_ngcontent-%COMP%]{\r\n  background-color: #F2EDF3;\r\n  height: calc(100vh - 50px); \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGVhbS1saXN0LWNvbnRhaW5lci90ZWFtLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCLEVBQUUsZ0JBQWdCO0FBQzlDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGVhbS1saXN0LWNvbnRhaW5lci90ZWFtLWxpc3QtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkVERjM7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7IC8qNTBweCA9IGhlYWRlciovXHJcbn0iXX0= */"] });
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SubtaskListComponent_div_1_table_5_tr_14_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function SubtaskListComponent_div_1_table_5_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_table_5_tr_14_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const subtask_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.showTaskDetail(subtask_r4 == null ? null : subtask_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SubtaskListComponent_div_1_table_5_tr_14_ng_template_9_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subtask_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subtask_r4 == null ? null : subtask_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", subtask_r4 == null ? null : subtask_r4.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.status[subtask_r4 == null ? null : subtask_r4.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((subtask_r4 == null ? null : subtask_r4.assignee == null ? null : subtask_r4.assignee.name) ? subtask_r4 == null ? null : subtask_r4.assignee == null ? null : subtask_r4.assignee.name : "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", subtask_r4.estimate, " hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", subtask_r4 == null ? null : subtask_r4.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.priority[subtask_r4 == null ? null : subtask_r4.priority]);
} }
function SubtaskListComponent_div_1_table_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SubtaskListComponent_div_1_table_5_Template_table_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Assignee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estimate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SubtaskListComponent_div_1_table_5_tr_14_Template, 16, 11, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.task.subTasks);
} }
function SubtaskListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subtasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addSubtask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+ Add subtask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubtaskListComponent_div_1_table_5_Template, 15, 1, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.task == null ? null : ctx_r0.task.subTasks.length) > 0);
} }
function SubtaskListComponent_div_2_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function SubtaskListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Parent task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function SubtaskListComponent_div_2_Template_table_scroll_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Assignee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Estimate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubtaskListComponent_div_2_Template_tr_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.showTaskDetail(ctx_r17.parent.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SubtaskListComponent_div_2_ng_template_26_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
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
class SubtaskListComponent {
    constructor(router, taskService) {
        this.router = router;
        this.taskService = taskService;
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_2__["Priority"];
        this.status = src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_3__["Status"];
    }
    ngOnInit() {
        if (this.task.parent_id) {
            this.taskService.getTaskById("" + this.task.parent_id).subscribe(result => {
                this.parent = new src_app_model_task__WEBPACK_IMPORTED_MODULE_1__["Task"](result.data);
            });
        }
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
    addSubtask() {
        this.router.navigate(['task-list', 'new-task', this.task.id]);
    }
}
SubtaskListComponent.ɵfac = function SubtaskListComponent_Factory(t) { return new (t || SubtaskListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"])); };
SubtaskListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubtaskListComponent, selectors: [["app-subtask-list"]], inputs: { task: "task" }, decls: 3, vars: 2, consts: [[1, "subtask"], [4, "ngIf"], [1, "add-button", 3, "click"], ["class", "task-table", 3, "scroll", 4, "ngIf"], [1, "task-table", 3, "scroll"], ["class", "task-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "task-table-item", 3, "click"], [1, "task-table-title"], ["empty", ""]], template: function SubtaskListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubtaskListComponent_div_1_Template, 6, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubtaskListComponent_div_2_Template, 33, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.task == null ? null : ctx.task.parent_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".subtask[_ngcontent-%COMP%] {\r\n  width: calc(70% - 60px);\r\n  background-color: white;\r\n  border: 1px solid transparent;\r\n  border-radius: 20px;\r\n  margin: 20px 20px 20px 0;\r\n  float: left;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n  font-weight: bold;\r\n  float:left;\r\n  margin: 15px 15px 8px 15px;\r\n}\r\n\r\n.add-button[_ngcontent-%COMP%] {\r\n  margin: 10px 15px 10px 10px;\r\n  background-color: #7215d8;\r\n  border: none;\r\n  color: white;\r\n  border: 1px solid transparent;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  float: right;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding-top: 28px;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n  margin-top: -28px;\r\n  display: inline-block;\r\n  width: calc(70% - 201px);\r\n  background-color: white;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 20px 0 20px 0;\r\n  display: inline-block;\r\n  width: 20%;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #dddddd;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 20%;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  padding: 0 7px;\r\n  border-radius: 10px;\r\n  color: white;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.task-table-title[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding-left: 15px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.task-table-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #f7f8f9;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first {\r\n  text-align: left !important;\r\n}\r\n\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    table-layout: fixed;\r\n    width: 100%;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    overflow-y: auto;\r\n    table-layout: fixed;\r\n    max-height: 260px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n\r\n  .subtask[_ngcontent-%COMP%] {\r\n      margin: 20px 15px 30px 15px;\r\n      width: calc(100% - 30px);\r\n      \r\n  }\r\n\r\n  tr[_ngcontent-%COMP%] {\r\n    min-width: 450px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyL3N1YnRhc2stbGlzdC9zdWJ0YXNrLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTs7RUFFRTtNQUNJLDJCQUEyQjtNQUMzQix3QkFBd0I7O0VBRTVCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyL3N1YnRhc2stbGlzdC9zdWJ0YXNrLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJ0YXNrIHtcclxuICB3aWR0aDogY2FsYyg3MCUgLSA2MHB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBtYXJnaW46IDE1cHggMTVweCA4cHggMTVweDtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gIG1hcmdpbjogMTBweCAxNXB4IDEwcHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIxNWQ4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udGFzay10YWJsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiAyOHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBjYWxjKDcwJSAtIDIwMXB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGJvZHkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4udGFzay10YWJsZSB0ciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGJvZHkgdHIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcblxyXG4udGFzay10YWJsZSB0aGVhZCB0ciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRoIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLnRhc2stdGFibGUtc3RhdHVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMCA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRhc2stdGFibGUtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnRhc2stdGFibGUtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmOTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRoZWFkIHRyIHRoOmZpcnN0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRoZWFkLFxyXG50Ym9keSB0ciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGJvZHkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgIG1heC1oZWlnaHQ6IDI2MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgLnN1YnRhc2sge1xyXG4gICAgICBtYXJnaW46IDIwcHggMTVweCAzMHB4IDE1cHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICB0ciB7XHJcbiAgICBtaW4td2lkdGg6IDQ1MHB4O1xyXG4gIH1cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubtaskListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subtask-list',
                templateUrl: './subtask-list.component.html',
                styleUrls: ['./subtask-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/team.service */ "mqDS");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_overview_task_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./task-overview/task-overview.component */ "zoOI");
/* harmony import */ var _subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subtask-list/subtask-list.component */ "huxS");














function TaskDetailContainerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.assignToMe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assign to me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_4_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.totest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_4_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.done(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.unasign(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Unassign");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskDetailContainerComponent_div_4_button_3_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskDetailContainerComponent_div_4_button_4_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.task == null ? null : ctx_r1.task.status) == "in_progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.task == null ? null : ctx_r1.task.status) == "to_test");
} }
function TaskDetailContainerComponent_div_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_5_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.totest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "To test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_5_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.done(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx_r27.open(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assign to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskDetailContainerComponent_div_5_button_3_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskDetailContainerComponent_div_5_button_4_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.task == null ? null : ctx_r2.task.assignee) != null && (ctx_r2.task == null ? null : ctx_r2.task.assignee.id) == (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.id) && (ctx_r2.task == null ? null : ctx_r2.task.status) == "in_progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r2.task == null ? null : ctx_r2.task.assignee) != null && (ctx_r2.task == null ? null : ctx_r2.task.assignee.id) == (ctx_r2.currentUser == null ? null : ctx_r2.currentUser.id) && (ctx_r2.task == null ? null : ctx_r2.task.status) == "to_test");
} }
function TaskDetailContainerComponent_app_task_overview_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-task-overview", 19);
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
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_18_span_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.assignToMe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assign to me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_ng_template_18_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_18_span_2_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx_r33.open(_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Assign to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskDetailContainerComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " This task has no assignee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskDetailContainerComponent_ng_template_18_span_1_Template, 5, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskDetailContainerComponent_ng_template_18_span_2_Template, 5, 0, "span", 20);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.task == null ? null : ctx_r7.task.creator.id) != (ctx_r7.currentUser == null ? null : ctx_r7.currentUser.id) && (ctx_r7.task == null ? null : ctx_r7.task.assignee) == null && (ctx_r7.task == null ? null : ctx_r7.task.status) == "free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.task == null ? null : ctx_r7.task.creator.id) == (ctx_r7.currentUser == null ? null : ctx_r7.currentUser.id));
} }
function TaskDetailContainerComponent_app_subtask_list_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-subtask-list", 22);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r8.task);
} }
function TaskDetailContainerComponent_ng_template_21_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_21_tr_19_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const person_r37 = ctx.$implicit; const modal_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r38.assignTo(person_r37.id); return modal_r35.dismiss("Cross click"); });
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
    const person_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r37.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r37.rank);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", person_r37.avg_task_priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.priority[person_r37.avg_task_priority]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r37.numberOfAssignedTasks);
} }
function TaskDetailContainerComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose a person");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskDetailContainerComponent_ng_template_21_Template_button_click_3_listener() { const modal_r35 = ctx.$implicit; return modal_r35.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 28);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "# of tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TaskDetailContainerComponent_ng_template_21_tr_19_Template, 10, 7, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.team);
} }
class TaskDetailContainerComponent {
    constructor(route, taskService, teamService, userService, modalService, titleService) {
        this.route = route;
        this.taskService = taskService;
        this.teamService = teamService;
        this.userService = userService;
        this.modalService = modalService;
        this.titleService = titleService;
        this.priority = src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__["Priority"];
    }
    ngOnInit() {
        let sub = this.route.queryParams.subscribe(params => {
            this.taskService.getTaskById(params['id']).subscribe(result => {
                this.task = new src_app_model_task__WEBPACK_IMPORTED_MODULE_2__["Task"](result.data);
                this.titleService.setTitle(this.task.title);
            });
        });
        sub.unsubscribe();
        this.userService.getUser().subscribe(data => {
            this.currentUser = data;
        });
        this.teamService.getAllTeamMembers().subscribe(result => {
            this.team = result.data.map(val => new src_app_model_team_member__WEBPACK_IMPORTED_MODULE_3__["TeamMember"](val));
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
TaskDetailContainerComponent.ɵfac = function TaskDetailContainerComponent_Factory(t) { return new (t || TaskDetailContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"])); };
TaskDetailContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskDetailContainerComponent, selectors: [["app-task-detail-container"]], decls: 23, vars: 10, consts: [["id", "task-detail-header"], ["id", "task-title"], ["class", "button-container", 4, "ngIf"], [3, "task", "user", 4, "ngIf"], [1, "people-container"], [1, "people-detail"], ["class", "people-detail", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notAssigned", ""], [3, "task", 4, "ngIf"], ["mymodal", ""], [1, "button-container"], ["id", "assign-button", 1, "btn", "btn-block", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "unassign", 3, "click"], ["class", "btn btn-primary totest", 3, "click", 4, "ngIf"], ["class", "btn btn-primary done", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "totest", 3, "click"], [1, "btn", "btn-primary", "done", 3, "click"], ["id", "assign-button", 1, "btn", "btn-primary", 3, "click"], [3, "task", "user"], [4, "ngIf"], [1, "assign-link", 3, "click"], [3, "task"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "team-table"], ["class", "team-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "team-table-item", 3, "click"]], template: function TaskDetailContainerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TaskDetailContainerComponent_app_subtask_list_20_Template, 1, 1, "app-subtask-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TaskDetailContainerComponent_ng_template_21_Template, 20, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _task_overview_task_overview_component__WEBPACK_IMPORTED_MODULE_11__["TaskOverviewComponent"], _subtask_list_subtask_list_component__WEBPACK_IMPORTED_MODULE_12__["SubtaskListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], styles: ["#task-detail-header[_ngcontent-%COMP%] {\r\n    padding: 30px 30px 0px 30px;\r\n    display: inline-flex;\r\n    width: 100%;\r\n}\r\n\r\n#asign-button[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n\r\n.button-container[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n}\r\n\r\n.people-container[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    background-color: white;\r\n    border: 1px solid transparent;\r\n    border-radius: 20px;\r\n    margin: 20px;\r\n    padding: 10px;\r\n    float: left;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.people-detail[_ngcontent-%COMP%] {\r\n    margin: 15px;\r\n}\r\n\r\n.unassign[_ngcontent-%COMP%] {\r\n    background-color: goldenrod;\r\n    outline: none;\r\n    border: 1px solid transparent;\r\n}\r\n\r\n.done[_ngcontent-%COMP%] {\r\n    background-color: blue;\r\n    outline: none;\r\n    border: 1px solid transparent;\r\n}\r\n\r\n.totest[_ngcontent-%COMP%] {\r\n    background-color: #ecf5ff;\r\n    outline: #007bff;\r\n    border: 2px solid #007bff;\r\n    color: #007bff;\r\n    font-weight: bold;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding-top: 20px;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    border-bottom: 1px solid #dddddd;\r\n    padding: 20px 0 20px 0;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #dddddd;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 20px 40px 20px 40px;\r\n    float: left;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n    margin-bottom: 10px;\r\n    float: right;\r\n}\r\n\r\n#team-list-container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 30px 30px 30px 30px;\r\n    border: 1px solid #dddddd;\r\n    border-radius: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.team-table-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f7f8f9;\r\n    cursor: pointer;\r\n    border-radius: 20px;\r\n}\r\n\r\n.team-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    overflow-y: auto;\r\n    table-layout: fixed;\r\n    max-height: 300px;\r\n}\r\n\r\n.assign-link[_ngcontent-%COMP%] {\r\n    cursor:pointer;\r\n    color:blue;\r\n    text-decoration:underline;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n\r\n    .people-container[_ngcontent-%COMP%] {\r\n        margin: 20px 15px 0 15px;\r\n        width: calc(100% - 30px);\r\n    }\r\n\r\n    #task-detail-header[_ngcontent-%COMP%]{\r\n        padding: 15px 30px 0px 30px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyL3Rhc2stZGV0YWlsLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLG9CQUFvQjtJQUNwQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUk7UUFDSSx3QkFBd0I7UUFDeEIsd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci90YXNrLWRldGFpbC1jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFzay1kZXRhaWwtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHggMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNhc2lnbi1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLnBlb3BsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wZW9wbGUtZGV0YWlsIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLnVuYXNzaWduIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRvbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRvdGVzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmNWZmO1xyXG4gICAgb3V0bGluZTogIzAwN2JmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGVhbS10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4udGVhbS10YWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbn1cclxuXHJcbi50ZWFtLXRhYmxlIHRyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRlYW0tdGFibGUgdGgge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMjBweCA0MHB4IDIwcHggNDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGFzay10YWJsZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiN0ZWFtLWxpc3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAzMHB4IDMwcHggMzBweCAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRlYW0tdGFibGUtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnRlYW0tdGFibGUgdGhlYWQgdGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aGVhZCxcclxudGJvZHkgdHIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmFzc2lnbi1saW5rIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cclxuICAgIC5wZW9wbGUtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMTVweCAwIDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgICN0YXNrLWRldGFpbC1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4IDBweCAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDetailContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-detail-container',
                templateUrl: './task-detail-container.component.html',
                styleUrls: ['./task-detail-container.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }, { type: src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_6__["TeamService"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"] }]; }, null); })();


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
        this.numberOfAssignedTasks = data.numberOfAssignedTasks;
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    \r\n    z-index: 1;\r\n    \r\n    top: 0;\r\n    \r\n    left: 0;\r\n    background-color: #ffffff;\r\n    \r\n    overflow-x: hidden;\r\n    \r\n    padding-top: 60px;\r\n    \r\n    transition: 0.5s;\r\n    \r\n}\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: #4d4c4c;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #7215d8;\r\n}\r\n\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n\r\n\r\n\r\n#main[_ngcontent-%COMP%] {\r\n    transition: margin-left .5s;\r\n    padding: 20px;\r\n}\r\n\r\n\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {\r\n        padding-top: 15px;\r\n    }\r\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n    background-color: #f7f8f9;\r\n    color: #7215d8 !important;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2QkFBNkI7O0FBRTdCO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQix5REFBeUQ7QUFDN0Q7O0FBR0EsOEJBQThCOztBQUU5QjtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUdBLGlFQUFpRTs7QUFFakU7SUFDSSxjQUFjO0FBQ2xCOztBQUdBLDJEQUEyRDs7QUFFM0Q7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUdBLHNIQUFzSDs7QUFFdEg7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtBQUNqQjs7QUFHQSxnSUFBZ0k7O0FBRWhJO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUEsa0JBQWtCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogMTAwJSBGdWxsLWhlaWdodCAqL1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC8qIFN0YXkgb24gdG9wICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLyogQmxhY2sqL1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgICAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgLyogMC41IHNlY29uZCB0cmFuc2l0aW9uIGVmZmVjdCB0byBzbGlkZSBpbiB0aGUgc2lkZW5hdiAqL1xyXG59XHJcblxyXG5cclxuLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xyXG5cclxuLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM0ZDRjNGM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcblxyXG4vKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cclxuXHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICM3MjE1ZDg7XHJcbn1cclxuXHJcblxyXG4vKiBQb3NpdGlvbiBhbmQgc3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAodG9wIHJpZ2h0IGNvcm5lcikgKi9cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG5cclxuLyogU3R5bGUgcGFnZSBjb250ZW50IC0gdXNlIHRoaXMgaWYgeW91IHdhbnQgdG8gcHVzaCB0aGUgcGFnZSBjb250ZW50IHRvIHRoZSByaWdodCB3aGVuIHlvdSBvcGVuIHRoZSBzaWRlIG5hdmlnYXRpb24gKi9cclxuXHJcbiNtYWluIHtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IC41cztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGVuYXYgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGVuYXYge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnNpZGVuYXYgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y4Zjk7XHJcbiAgICBjb2xvcjogIzcyMTVkOCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlIGE6YWN0aXZlIHt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "scWw":
/*!************************************************************************************************!*\
  !*** ./src/app/components/container/overview-container/created-list/created-list.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreatedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedListComponent", function() { return CreatedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/enum/status.enum */ "0jXk");
/* harmony import */ var src_app_model_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/task */ "AEEF");
/* harmony import */ var src_app_model_team_member__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/team-member */ "lIHx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/team.service */ "mqDS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");













function CreatedListComponent_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", member_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", member_r4.name, " ");
} }
function CreatedListComponent_tr_73_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function CreatedListComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatedListComponent_tr_73_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const task_r5 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.showTaskDetail(task_r5 == null ? null : task_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreatedListComponent_tr_73_ng_template_7_Template, 1, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r5 == null ? null : task_r5.deadline.split(" ")[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", task_r5 == null ? null : task_r5.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.priority[task_r5 == null ? null : task_r5.priority]);
} }
function CreatedListComponent_a_76_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatedListComponent_a_76_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreatedListComponent_a_77_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatedListComponent_a_77_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { "task-filter": true, "hidden": a1 }; };
const _c1 = function (a1) { return { "task-table": true, "task-table-filter": a1 }; };
class CreatedListComponent {
    constructor(router, taskService, userService, titleService, teamService) {
        this.router = router;
        this.taskService = taskService;
        this.userService = userService;
        this.titleService = titleService;
        this.teamService = teamService;
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
            assignee: "",
            title: ""
        };
    }
    ngOnInit() {
        this.userService.getUser().subscribe(result => {
            this.user = result;
            this.filterTasks();
        });
        this.teamService.getAllTeamMembers().subscribe(result => {
            this.team = result.data.map(val => new src_app_model_team_member__WEBPACK_IMPORTED_MODULE_4__["TeamMember"](val));
        });
    }
    mapData(result) {
        this.tasks = result.data.map(val => new src_app_model_task__WEBPACK_IMPORTED_MODULE_3__["Task"](val));
        this.filteredTasks = this.tasks;
        let filter = (this.filter.prio ? "&priority[]=" + this.filter.prio : "") +
            (this.filter.status ? "&status[]=" + this.filter.status : "") +
            ("&creator[]=" + this.user.id) +
            ("&title=" + this.filter.title);
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
            case "task-filter-title":
                if (this.filter.title != target.value) {
                    wasChange = true;
                }
                this.filter.title = target.value;
        }
        if (wasChange) {
            this.filterTasks();
        }
    }
    filterTasks() {
        let filter = {
            "priority[]": (this.filter.prio && this.filter.prio != "" ? this.filter.prio : undefined),
            "status[]": (this.filter.status && this.filter.status != "" ? this.filter.status : undefined),
            "creator[]": this.user.id,
            "title": (this.filter.title && this.filter.title != "" ? this.filter.title : undefined)
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
CreatedListComponent.ɵfac = function CreatedListComponent_Factory(t) { return new (t || CreatedListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_9__["TeamService"])); };
CreatedListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatedListComponent, selectors: [["app-created-list"]], decls: 78, vars: 10, consts: [["id", "task-list-container"], [1, "task-filter-button", 3, "click"], [1, "common-filters_container"], ["type", "radio", "id", "all", "value", "", "name", "status", "checked", "", 3, "change"], ["for", "all", 1, "radio-label"], ["type", "radio", "id", "in-progress", "value", "in_progress", "name", "status", 1, "radio-button", 3, "change"], ["for", "in-progress", 1, "radio-label"], ["type", "radio", "id", "test", "value", "to_test", "name", "status", 1, "radio-button", 3, "change"], ["for", "test", 1, "radio-label"], ["type", "radio", "id", "done", "value", "done", "name", "status", 1, "radio-button", 3, "change"], ["for", "done", 1, "radio-label"], [3, "ngClass"], [1, "task-filter-option"], ["for", "task-filter-title"], ["id", "task-filter-title", "type", "text", 3, "input"], ["for", "task-filter-status"], ["id", "task-filter-status", 3, "change"], ["value", ""], ["value", "free"], ["value", "in_progress"], ["value", "to_test"], ["value", "done"], ["for", "task-filter-assignee"], ["id", "task-filter-assignee", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "task-filter-prio"], ["id", "task-filter-prio", 3, "change"], ["value", "low"], ["value", "medium"], ["value", "high"], [3, "ngClass", "scroll"], ["class", "task-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-links"], [3, "click", 4, "ngIf"], [3, "value"], [1, "task-table-item", 3, "click"], [1, "task-table-title"], ["empty", ""], [1, "task-table-deadline"], [3, "click"]], template: function CreatedListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Created by me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatedListComponent_Template_div_click_3_listener() { return ctx.showHideFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatedListComponent_Template_input_change_7_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatedListComponent_Template_input_change_10_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatedListComponent_Template_input_change_13_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "To test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatedListComponent_Template_input_change_16_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreatedListComponent_Template_input_input_24_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatedListComponent_Template_select_change_29_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "FREE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "IN PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "TO TEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Assignee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatedListComponent_Template_select_change_44_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CreatedListComponent_option_47_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatedListComponent_Template_select_change_52_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "MEDIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function CreatedListComponent_Template_table_scroll_61_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, CreatedListComponent_tr_73_Template, 14, 10, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, CreatedListComponent_a_76_Template, 4, 0, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, CreatedListComponent_a_77_Template, 4, 0, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.showFilter === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.showFilter === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.prev != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.next != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], styles: [".task-table[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: calc(100% - 30px - 124px);\r\n    padding-top: 28px;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.task-table-filter[_ngcontent-%COMP%] {\r\n    height: calc(100% - 30px - 374px);\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n    margin-top: -28px;\r\n    display: inline-block;\r\n    width: calc(100% - 200px - 62px);\r\n    background-color: white;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0 20px 0;\r\n    display: inline-block;\r\n    width: 25%;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #dddddd;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 25%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 20px 40px 20px 40px;\r\n    float: left;\r\n}\r\n\r\n.task-filter-button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 20px 20px 20px 20px;\r\n    cursor: pointer;\r\n    color: #7215d8;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-filter[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: calc(100% - 80px);\r\n    margin: 0 40px 0 40px;\r\n    padding: 0 0 20px 0;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.task-filter-option[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-right: 40px;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.task-table-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f7f8f9;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-table-title[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding-left: 15px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first {\r\n    text-align: left !important;\r\n}\r\n\r\n.right-button-container[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n\r\n.add-button[_ngcontent-%COMP%] {\r\n    margin: 10px 30px 10px 10px;\r\n    background-color: #7215d8;\r\n    border: none;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n    border-radius: 5px;\r\n    outline: none;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #7215d8;\r\n    float: left;\r\n    padding: 2px 16px 8px 16px;\r\n    text-decoration: none;\r\n    font-size: x-large;\r\n    transition: background-color .3s;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n#task-list-container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 30px 30px 30px 15px;\r\n    height: calc(100% - 60px);\r\n    border: 1px solid #dddddd;\r\n    border-radius: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.pagination-links[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.common-filters_container[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-left: 30px;\r\n}\r\n\r\n.radio-label[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n}\r\n\r\n.radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0 20px 0;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n}\r\n\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    overflow-y: auto;\r\n    table-layout: fixed;\r\n    max-height: calc(100% - 1px);\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    thead[_ngcontent-%COMP%] {\r\n        overflow: hidden;\r\n    }\r\n    .task-table[_ngcontent-%COMP%] {\r\n        overflow-x: auto;\r\n    }\r\n    tbody[_ngcontent-%COMP%] {\r\n        max-height: 400px;\r\n    }\r\n    tr[_ngcontent-%COMP%] {\r\n        min-width: 450px;\r\n    }\r\n    .task-filter-option[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .task-table-filter[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{\r\n        max-height: 170px;\r\n    }\r\n    #task-list-container[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        max-height: 570px;\r\n        margin: 0 15px 30px 15px;\r\n    }\r\n    h2[_ngcontent-%COMP%] {\r\n        margin: 15px 30px 15px 30px;\r\n    }\r\n    .common-filters_container[_ngcontent-%COMP%] {\r\n        margin-left: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvb3ZlcnZpZXctY29udGFpbmVyL2NyZWF0ZWQtbGlzdC9jcmVhdGVkLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL292ZXJ2aWV3LWNvbnRhaW5lci9jcmVhdGVkLWxpc3QvY3JlYXRlZC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzay10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHggLSAxMjRweCk7XHJcbiAgICBwYWRkaW5nLXRvcDogMjhweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhc2stdGFibGUtZmlsdGVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDM3NHB4KTtcclxufVxyXG5cclxudGhlYWQge1xyXG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHggLSA2MnB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50Ym9keSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFzay10YWJsZSB0Ym9keSB0ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGhlYWQgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGRkZGQ7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRoIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMjBweCA0MHB4IDIwcHggNDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGFzay1maWx0ZXItYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNzIxNWQ4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50YXNrLWZpbHRlciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgIG1hcmdpbjogMCA0MHB4IDAgNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRhc2stZmlsdGVyLW9wdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuLnRhc2stdGFibGUtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmOTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2stdGFibGUtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRoZWFkIHRyIHRoOmZpcnN0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJpZ2h0LWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweCAzMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjE1ZDg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEge1xyXG4gICAgY29sb3I6ICM3MjE1ZDg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4IDhweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4jdGFzay1saXN0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMzBweCAzMHB4IDMwcHggMTVweDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1saW5rcyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29tbW9uLWZpbHRlcnNfY29udGFpbmVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnJhZGlvLWxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2stdGFibGUtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGhlYWQsXHJcbnRib2R5IHRyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG50Ym9keSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMXB4KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC50YXNrLXRhYmxlIHtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgdHIge1xyXG4gICAgICAgIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgICB9XHJcbiAgICAudGFzay1maWx0ZXItb3B0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC50YXNrLXRhYmxlLWZpbHRlciB0Ym9keXtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNzBweDtcclxuICAgIH1cclxuICAgICN0YXNrLWxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE1cHggMzBweCAxNXB4O1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAzMHB4IDE1cHggMzBweDtcclxuICAgIH1cclxuICAgIC5jb21tb24tZmlsdGVyc19jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatedListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-created-list',
                templateUrl: './created-list.component.html',
                styleUrls: ['./created-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"] }, { type: src_app_shared_services_team_service__WEBPACK_IMPORTED_MODULE_9__["TeamService"] }]; }, null); })();


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
    { path: '', component: _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_3__["OverviewContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
    { path: 'dashboard', component: _components_container_overview_container_overview_container_component__WEBPACK_IMPORTED_MODULE_3__["OverviewContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]] },
    { path: 'task-list', component: _components_container_task_list_container_task_list_container_component__WEBPACK_IMPORTED_MODULE_6__["TaskListContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], children: [
            { path: '', component: _components_container_task_list_container_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_7__["TaskListComponent"] },
            { path: 'task-detail', component: _components_container_task_detail_container_task_detail_container_component__WEBPACK_IMPORTED_MODULE_5__["TaskDetailContainerComponent"] },
            { path: 'new-task', component: _components_container_new_task_container_new_task_container_component__WEBPACK_IMPORTED_MODULE_2__["NewTaskContainerComponent"] },
            { path: 'new-task/:id', component: _components_container_new_task_container_new_task_container_component__WEBPACK_IMPORTED_MODULE_2__["NewTaskContainerComponent"] }
        ] },
    { path: 'team-list', component: _components_container_team_list_container_team_list_container_component__WEBPACK_IMPORTED_MODULE_8__["TeamListContainerComponent"], canActivate: [_shared_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_12__["AuthGuardService"]], children: [
            { path: '', component: _components_container_team_list_container_team_list_team_list_component__WEBPACK_IMPORTED_MODULE_9__["TeamListComponent"] },
            { path: 'person-detail', component: _components_container_person_detail_container_person_detail_container_component__WEBPACK_IMPORTED_MODULE_4__["PersonDetailContainerComponent"] },
        ] },
    { path: 'sign-in', component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"] },
    { path: 'sign-up', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"] },
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
    constructor(fb, taskService, router, route, datepipe, titleService) {
        this.fb = fb;
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.datepipe = datepipe;
        this.titleService = titleService;
    }
    ngOnInit() {
        this.taskForm = this.fb.group({
            title: [],
            priority: [],
            estimate: [],
            deadline: [],
            parent_id: []
        });
        this.route.params.subscribe(params => {
            this.taskForm.patchValue({
                parent_id: params['id']
            });
        });
        this.titleService.setTitle("New task");
    }
    choosePriority(priority) {
        this.priority = priority;
        this.taskForm.reset({
            priority: priority,
            title: this.taskForm.value.title,
            estimate: this.taskForm.value.estimate,
            deadline: this.taskForm.value.deadline,
            parent_id: this.taskForm.value.parent_id
        });
    }
    createNewTask() {
        if (!this.isDateFormated) {
            this.taskForm.value.deadline = this.datepipe.transform(new Date(this.taskForm.value.deadline), 'dd/MM/yyyy HH:mm');
            this.isDateFormated = true;
        }
        console.log(this.taskForm.value);
        this.taskService.createTask(this.taskForm.value).subscribe(result => {
            this.router.navigate(['/task-list/task-detail'], { queryParams: { id: result.data.id } });
        }, error => {
            //todo validations
            this.isDateFormated = false;
        });
    }
    onDate(event) {
        this.isDateFormated = false;
        console.log(this.taskForm.value);
    }
}
NewTaskContainerComponent.ɵfac = function NewTaskContainerComponent_Factory(t) { return new (t || NewTaskContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"])); };
NewTaskContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewTaskContainerComponent, selectors: [["app-new-task-container"]], viewQuery: function NewTaskContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.priorityField = _t.first);
    } }, decls: 35, vars: 14, consts: [[1, "new-task-container"], [3, "formGroup", "ngSubmit"], [1, "fields-container"], [1, "field", "task-title"], ["type", "text", "formControlName", "title", 1, "text-input", "form-control"], [1, "other-fields"], [1, "field", "task-priority"], ["hidden", "", "formControlName", "priority", 1, "form-control", 3, "value"], ["priorityField", ""], [1, "task-priority-values"], [1, "task-table-status", "low", 3, "ngClass", "click"], [1, "task-table-status", "medium", 3, "ngClass", "click"], [1, "task-table-status", "high", 3, "ngClass", "click"], [1, "field", "task-estimate"], ["type", "text", "formControlName", "estimate", 1, "text-input", "form-control", "estimate"], [1, "field", "task-deadline"], ["matInput", "", "formControlName", "deadline", 1, "form-control", 3, "matDatepicker", "dateInput"], ["matSuffix", "", 3, "for"], [3, "dateChange"], ["picker", ""], [1, "right-button-container"], ["type", "submit", 1, "add-button"]], template: function NewTaskContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewTaskContainerComponent_Template_form_ngSubmit_1_listener() { return ctx.createNewTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.taskForm.value.parent_id ? "Subtask" : "Task", " title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.priority == "low"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx.priority == "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.priority == "high"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"]], styles: [".new-task-container[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    background-color: white;\r\n    border: 0.5px solid lightgrey;\r\n    border-radius: 10px;\r\n    width: 80%;\r\n    height: auto;\r\n    margin: 50px auto 50px auto;\r\n}\r\n\r\n.text-input[_ngcontent-%COMP%], .text-input[_ngcontent-%COMP%]:active {\r\n    border: none;\r\n    border-bottom: solid 1px gray;\r\n    background: none;\r\n    outline: none;\r\n    width: 100%;\r\n}\r\n\r\n.field[_ngcontent-%COMP%] {\r\n    margin: 40px;\r\n}\r\n\r\n.field[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.task-deadline[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.fields-container[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\n.right-button-container[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n\r\n.add-button[_ngcontent-%COMP%] {\r\n    margin: 10px 50px 30px 0px;\r\n    background-color: #7215d8;\r\n    border: none;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    font-size: larger;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    margin: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.task-priority-values[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    justify-content: space-between;\r\n}\r\n\r\n.active-priority[_ngcontent-%COMP%] {\r\n    border: 3px solid darkslategrey;\r\n}\r\n\r\n  .mat-input-underline {\r\n    visibility: visible;\r\n    z-index: -999;\r\n    display: block;\r\n}\r\n\r\n.other-fields[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.estimate[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .new-task-container[_ngcontent-%COMP%] {\r\n        margin: 15px 30px 15px 15px;\r\n        width: calc(100% - 30px);\r\n    }\r\n    .field[_ngcontent-%COMP%] {\r\n        margin: 20px;\r\n    }\r\n    .other-fields[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .estimate[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n    }\r\n    .mat-form-field[_ngcontent-%COMP%] {\r\n        width: calc(100%);\r\n    }\r\n    .task-priority-values[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvbmV3LXRhc2stY29udGFpbmVyL25ldy10YXNrLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtRQUMzQix3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvbmV3LXRhc2stY29udGFpbmVyL25ldy10YXNrLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy10YXNrLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byA1MHB4IGF1dG87XHJcbn1cclxuXHJcbi50ZXh0LWlucHV0LFxyXG4udGV4dC1pbnB1dDphY3RpdmUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyYXk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gICAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG4uZmllbGQgaDQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRhc2stZGVhZGxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmZpZWxkcy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDUwcHggMzBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzIxNWQ4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlLXN0YXR1cyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAwIDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFzay10YWJsZS1zdGF0dXM6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1wcmlvcml0eS12YWx1ZXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmFjdGl2ZS1wcmlvcml0eSB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBkYXJrc2xhdGVncmV5O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1pbnB1dC11bmRlcmxpbmUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHotaW5kZXg6IC05OTk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm90aGVyLWZpZWxkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZXN0aW1hdGUge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAubmV3LXRhc2stY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDE1cHggMzBweCAxNXB4IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgfVxyXG4gICAgLmZpZWxkIHtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB9XHJcbiAgICAub3RoZXItZmllbGRzIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5lc3RpbWF0ZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAudGFzay1wcmlvcml0eS12YWx1ZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewTaskContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-task-container',
                templateUrl: './new-task-container.component.html',
                styleUrls: ['./new-task-container.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }]; }, { priorityField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['priorityField']
        }] }); })();


/***/ }),

/***/ "vdog":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/container/overview-container/assigned-list/assigned-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AssignedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedListComponent", function() { return AssignedListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enum_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enum/priority.enum */ "YBnQ");
/* harmony import */ var src_app_model_enum_status_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/enum/status.enum */ "0jXk");
/* harmony import */ var src_app_model_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/task */ "AEEF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/task.service */ "ev4g");
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function AssignedListComponent_tr_65_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td");
} }
function AssignedListComponent_tr_65_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignedListComponent_tr_65_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const task_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.showTaskDetail(task_r3 == null ? null : task_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssignedListComponent_tr_65_ng_template_7_Template, 1, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("task-table-status ", task_r3 == null ? null : task_r3.priority, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.priority[task_r3 == null ? null : task_r3.priority]);
} }
function AssignedListComponent_a_68_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignedListComponent_a_68_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.prevPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssignedListComponent_a_69_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignedListComponent_a_69_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { "task-filter": true, "hidden": a1 }; };
const _c1 = function (a1) { return { "task-table": true, "task-table-filter": a1 }; };
class AssignedListComponent {
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
            assignee: "",
            title: ""
        };
    }
    ngOnInit() {
        this.userService.getUser().subscribe(result => {
            this.user = result;
            this.filterTasks();
        });
    }
    mapData(result) {
        this.tasks = result.data.map(val => new src_app_model_task__WEBPACK_IMPORTED_MODULE_3__["Task"](val));
        this.filteredTasks = this.tasks;
        let filter = (this.filter.prio ? "&priority[]=" + this.filter.prio : "") +
            (this.filter.status ? "&status[]=" + this.filter.status : "") +
            ("&assignee[]=" + this.user.id) +
            ("&title=" + this.filter.title);
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
            case "task-filter-title":
                if (this.filter.title != target.value) {
                    wasChange = true;
                }
                this.filter.title = target.value;
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
            "title": (this.filter.title && this.filter.title != "" ? this.filter.title : undefined)
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
AssignedListComponent.ɵfac = function AssignedListComponent_Factory(t) { return new (t || AssignedListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"])); };
AssignedListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssignedListComponent, selectors: [["app-assigned-list"]], decls: 70, vars: 9, consts: [["id", "task-list-container"], [1, "task-filter-button", 3, "click"], [1, "common-filters_container"], ["type", "radio", "id", "all1", "value", "", "name", "status", "checked", "", 3, "change"], ["for", "all1", 1, "radio-label"], ["type", "radio", "id", "in-progress1", "value", "in_progress", "name", "status", 1, "radio-button", 3, "change"], ["for", "in-progress1", 1, "radio-label"], ["type", "radio", "id", "test1", "value", "to_test", "name", "status", 1, "radio-button", 3, "change"], ["for", "test1", 1, "radio-label"], ["type", "radio", "id", "done1", "value", "done", "name", "status", 1, "radio-button", 3, "change"], ["for", "done1", 1, "radio-label"], [3, "ngClass"], [1, "task-filter-option"], ["for", "task-filter-title1"], ["id", "task-filter-title1", "type", "text", 3, "input"], ["for", "task-filter-status"], ["id", "task-filter-status", 3, "change"], ["value", ""], ["value", "free"], ["value", "in_progress"], ["value", "to_test"], ["value", "done"], ["for", "task-filter-prio"], ["id", "task-filter-prio", 3, "change"], ["value", "low"], ["value", "medium"], ["value", "high"], [3, "ngClass", "scroll"], ["class", "task-table-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "pagination"], [1, "pagination-links"], [3, "click", 4, "ngIf"], [1, "task-table-item", 3, "click"], [1, "task-table-title"], ["empty", ""], [1, "task-table-deadline"], [3, "click"]], template: function AssignedListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Assigned to me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssignedListComponent_Template_div_click_3_listener() { return ctx.showHideFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AssignedListComponent_Template_input_change_7_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AssignedListComponent_Template_input_change_10_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AssignedListComponent_Template_input_change_13_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "To test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AssignedListComponent_Template_input_change_16_listener($event) { return ctx.onCustomFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AssignedListComponent_Template_input_input_24_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AssignedListComponent_Template_select_change_29_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "FREE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "IN PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "TO TEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AssignedListComponent_Template_select_change_44_listener($event) { return ctx.onFilter($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ALL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "LOW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "MEDIUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "HIGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AssignedListComponent_Template_table_scroll_53_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Deadline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AssignedListComponent_tr_65_Template, 14, 10, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AssignedListComponent_a_68_Template, 4, 0, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AssignedListComponent_a_69_Template, 4, 0, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showFilter === false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.showFilter === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.prev != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pagination.next != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".task-table[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: calc(100% - 30px - 124px);\r\n    padding-top: 28px;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.task-table-filter[_ngcontent-%COMP%] {\r\n    height: calc(100% - 30px - 318px);\r\n}\r\n\r\nthead[_ngcontent-%COMP%] {\r\n    margin-top: -28px;\r\n    display: inline-block;\r\n    width: calc(100% - 200px - 62px);\r\n    background-color: white;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0 20px 0;\r\n    display: inline-block;\r\n    width: 25%;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #dddddd;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 2px solid #dddddd;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 25%;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 20px 40px 20px 40px;\r\n    float: left;\r\n}\r\n\r\n.task-filter-button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 20px 20px 20px 20px;\r\n    cursor: pointer;\r\n    color: #7215d8;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-filter[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: calc(100% - 80px);\r\n    margin: 0 40px 0 40px;\r\n    padding: 0 0 20px 0;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.task-filter-option[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-right: 40px;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.task-table-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #f7f8f9;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-table-title[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding-left: 15px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first {\r\n    text-align: left !important;\r\n}\r\n\r\n.right-button-container[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n\r\n.add-button[_ngcontent-%COMP%] {\r\n    margin: 10px 30px 10px 10px;\r\n    background-color: #7215d8;\r\n    border: none;\r\n    color: white;\r\n    border: 1px solid transparent;\r\n    border-radius: 5px;\r\n    outline: none;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #7215d8;\r\n    float: left;\r\n    padding: 2px 16px 8px 16px;\r\n    text-decoration: none;\r\n    font-size: x-large;\r\n    transition: background-color .3s;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\n#task-list-container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 30px 15px 30px 30px;\r\n    height: calc(100% - 60px);\r\n    border: 1px solid #dddddd;\r\n    border-radius: 20px;\r\n    background-color: white;\r\n}\r\n\r\n.pagination-links[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n}\r\n\r\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.common-filters_container[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 100%;\r\n    margin-left: 30px;\r\n}\r\n\r\n.radio-label[_ngcontent-%COMP%] {\r\n    margin-left: 5px;\r\n}\r\n\r\n.radio-button[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0 20px 0;\r\n}\r\n\r\n.task-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n}\r\n\r\nthead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\ntbody[_ngcontent-%COMP%] {\r\n    display: block;\r\n    overflow-y: auto;\r\n    table-layout: fixed;\r\n    max-height: calc(100% - 1px);\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    thead[_ngcontent-%COMP%] {\r\n        overflow: hidden;\r\n    }\r\n    .task-table[_ngcontent-%COMP%] {\r\n        overflow-x: auto;\r\n    }\r\n    tbody[_ngcontent-%COMP%] {\r\n        max-height: 400px;\r\n    }\r\n    tr[_ngcontent-%COMP%] {\r\n        min-width: 450px;\r\n    }\r\n    .task-filter-option[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .task-table-filter[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{\r\n        max-height: 225px;\r\n    }\r\n    #task-list-container[_ngcontent-%COMP%] {\r\n        height: auto;\r\n        max-height: 570px;\r\n        margin: 15px;\r\n    }\r\n    h2[_ngcontent-%COMP%] {\r\n        margin: 15px 30px 15px 30px;\r\n    }\r\n    .common-filters_container[_ngcontent-%COMP%] {\r\n        margin-left: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvb3ZlcnZpZXctY29udGFpbmVyL2Fzc2lnbmVkLWxpc3QvYXNzaWduZWQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFpbmVyL292ZXJ2aWV3LWNvbnRhaW5lci9hc3NpZ25lZC1saXN0L2Fzc2lnbmVkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCAtIDEyNHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAyOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4udGFzay10YWJsZS1maWx0ZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4IC0gMzE4cHgpO1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCAtIDYycHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFzay10YWJsZSB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDAgMjBweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdHIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLXRhYmxlIHRib2R5IHRyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG59XHJcblxyXG4udGFzay10YWJsZSB0aGVhZCB0ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZDtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAyMHB4IDQwcHggMjBweCA0MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi50YXNrLWZpbHRlci1idXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM3MjE1ZDg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRhc2stZmlsdGVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgbWFyZ2luOiAwIDQwcHggMCA0MHB4O1xyXG4gICAgcGFkZGluZzogMCAwIDIwcHggMDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGFzay1maWx0ZXItb3B0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udGFzay10YWJsZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRhc2stdGFibGUtaXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGY5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay10YWJsZS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGhlYWQgdHIgdGg6Zmlyc3Qge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHQtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFkZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyMTVkODtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgICBjb2xvcjogIzcyMTVkODtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHggOHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcztcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbiN0YXNrLWxpc3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAzMHB4IDE1cHggMzBweCAzMHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLWxpbmtzIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb21tb24tZmlsdGVyc19jb250YWluZXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHggMDtcclxufVxyXG5cclxuLnRhc2stdGFibGUgdHIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFzay10YWJsZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG50aGVhZCxcclxudGJvZHkgdHIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRib2R5IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAxcHgpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHRoZWFkIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnRhc2stdGFibGUge1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA0NTBweDtcclxuICAgIH1cclxuICAgIC50YXNrLWZpbHRlci1vcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnRhc2stdGFibGUtZmlsdGVyIHRib2R5e1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIyNXB4O1xyXG4gICAgfVxyXG4gICAgI3Rhc2stbGlzdC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1NzBweDtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDMwcHggMTVweCAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbW1vbi1maWx0ZXJzX2NvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssignedListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-assigned-list',
                templateUrl: './assigned-list.component.html',
                styleUrls: ['./assigned-list.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_shared_services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }, { type: src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"] }]; }, null); })();


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task == null ? null : ctx.task.rank);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".overview[_ngcontent-%COMP%] {\r\n    border: 1px solid transparent;\r\n    border-radius: 20px;\r\n    background-color: white;\r\n    padding: 20px;\r\n    margin: 0px 20px;\r\n}\r\n\r\n.overview-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\n.overview-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-weight: bold;\r\n}\r\n\r\n.task-table-status[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0 7px;\r\n    border-radius: 10px;\r\n    color: white;\r\n}\r\n\r\n.task-description-container[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n}\r\n\r\n.task-description-title[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    font-weight: bold;\r\n}\r\n\r\n.edit[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.description-area[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n}\r\n\r\n.after-deadline-warning[_ngcontent-%COMP%] {\r\n    color: #CC0000;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n    .overview[_ngcontent-%COMP%] {\r\n        margin: 0px 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWluZXIvdGFzay1kZXRhaWwtY29udGFpbmVyL3Rhc2stb3ZlcnZpZXcvdGFzay1vdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhaW5lci90YXNrLWRldGFpbC1jb250YWluZXIvdGFzay1vdmVydmlldy90YXNrLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcnZpZXcge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG5cclxuLm92ZXJ2aWV3LXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG5cclxuLm92ZXJ2aWV3LXRhYmxlIHRoZWFkIHRyIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRhc2stdGFibGUtc3RhdHVzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi50YXNrLWRlc2NyaXB0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVkaXQ6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tYXJlYSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uYWZ0ZXItZGVhZGxpbmUtd2FybmluZyB7XHJcbiAgICBjb2xvcjogI0NDMDAwMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAub3ZlcnZpZXcge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
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