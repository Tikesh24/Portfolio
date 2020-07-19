(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isPageData\" class=\"container-fluid parallax\"\n    [ngStyle]=\"{'background-image':'url(../../../assets/background/bg3.jpg)'}\">\n    <div class=\"container pt-5 pb-4\">\n        <div class=\"row glass_effect pb-5\">\n            <div class=\"col-12 align-items-center w-100 h-100\">\n                <!-- <app-login></app-login> -->\n                <app-dashboard *ngIf=\"pageData\" [userData]='pageData'></app-dashboard>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row pt-1 font_4 text-white\">\n    <h3 class=\"font_3 pt-5 pl-5 pb-4\"><b><span class=\"text-primary\">|||</span><span class=\"text-white\">Dash</span><span\n                class=\"text-primary\">Board</span></b></h3>\n    <div class=\"col-md-10 offset-md-1\">\n        <ul class=\"list-group\" *ngIf=\"showPanel\">\n            <li class=\"list-group-item glass_effect\" (click)=\"togglePanel(showPanel,panel='editPanel')\"><i\n                    class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit Portfolio</li>\n            <li class=\"list-group-item glass_effect\" (click)=\"togglePanel(showPanel,panel='feedbackPanel')\"><i\n                    class=\"fa fa-comments-o\" aria-hidden=\"true\"></i> Feedback</li>\n        </ul>\n\n        <div class=\"jumbotron glass_effect pt-3 pl-3\" *ngIf=\"editPanel\">\n            <div class=\"nav\">\n                <h6 class=\"font_3 nav-item\"><b><span class=\"text-primary\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></span><span class=\"text-white\">Edit</span><span class=\"text-primary\">Panel</span></b></h6>\n                <h4 class=\"font_3 nav-item ml-auto\" (click)=\"togglePanel(showPanel)\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></h4>\n            </div>\n            <div>\n                <app-edit-panel [data]=\"userData\"></app-edit-panel>\n            </div>\n        </div>\n        <div class=\"jumbotron glass_effect pt-3 pl-3\" *ngIf=\"feedbackPanel\">\n            <div class=\"nav\">\n                <h6 class=\"font_3\"><b><span class=\"text-primary\"><i class=\"fa fa-comments-o\" aria-hidden=\"true\"></i></span><span class=\"text-white\">Feedback</span><span class=\"text-primary\">Panel</span></b></h6>\n                <h4 class=\"font_3 nav-item ml-auto\" (click)=\"togglePanel(showPanel)\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></h4>\n            </div>\n            <div>\n                <app-feedback-panel></app-feedback-panel>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard/edit-panel/edit-panel.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/dashboard/edit-panel/edit-panel.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark pt-0 pb-0\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n            <ul class=\"navbar-nav nav\">\n                <li class=\"nav-item\" (click)=\"doEdit(true)\">\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\">Home</a>\n                </li>\n                <li class=\"nav-item\" (click)=\"doEdit(true)\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#about\">About</a>\n                </li>\n                <li class=\"nav-item\" (click)=\"doEdit(true)\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#skills\">Skills</a>\n                </li>\n                <li class=\"nav-item\" (click)=\"doEdit(true)\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#experience\">Experience</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n\n    <div class=\"tab-content font_4\">\n        <div class=\"tab-pane container active pl-1 pr-1\" id=\"home\">\n            <div class=\"font_3 pt-1 text-right pb-1\">\n                <span><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"doEdit(isEdit)\"></i></span>\n            </div>\n            <div class=\"glass_effect p-2\">\n                <div>\n                    <form [formGroup]=\"homeFormGroup\" (ngSubmit)=\"onSubmitHome(homeFormGroup.value)\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <label for=\"firstname\">Firstname:</label>\n                            </div>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control h-75 p-1\" id=\"firstname\"\n                                    placeholder=\"{{home['first-name']}}\" disabled *ngIf=\"!isEdit\">\n                                <input type=\"text\" class=\"form-control h-75 p-1\" id=\"firstname\"\n                                    value=\"{{home['first-name']}}\" formControlName=\"firstname\" *ngIf=\"isEdit\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <label for=\"lastname\">Lastname:</label>\n                            </div>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control h-75 p-1\" id=\"lastname\"\n                                    placeholder=\"{{home['second-name']}}\" disabled *ngIf=\"!isEdit\">\n                                <input type=\"text\" class=\"form-control h-75 p-1\" formControlName=\"lastname\"\n                                    id=\"lastname\" value=\"{{home['second-name']}}\" *ngIf=\"isEdit\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <label for=\"designation\">Designation:</label>\n                            </div>\n                            <div class=\"col-md-10\">\n                                <input type=\"text\" class=\"form-control h-75 p-1\" id=\"designation\"\n                                    placeholder=\"{{home['designation']}}\" disabled *ngIf=\"!isEdit\">\n                                <input type=\"text\" class=\"form-control h-75 p-1\" formControlName=\"designation\"\n                                    id=\"designation\" value=\"{{home['designation']}}\" *ngIf=\"isEdit\">\n                            </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"isEdit\"><span><i class=\"fa fa-floppy-o\"\n                                    aria-hidden=\"true\"></i></span> Save</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane container fade pl-1 pr-1\" id=\"about\">\n            <div class=\"font_3 pt-1 text-right pb-1\">\n                <span><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"doEdit(isEdit)\"></i></span>\n            </div>\n            <div class=\"glass_effect p-2\">\n                <div>\n                    <form [formGroup]=\"aboutFormGroup\" (ngSubmit)=\"onSubmitAbout(aboutFormGroup.value)\">\n                        <div class=\"form-group\">\n                            <label for=\"introduction\">Introduction:</label>\n                            <textarea class=\"form-control\" rows=\"3\" id=\"introduction\"\n                                placeholder=\"{{about['about-text']}}\" disabled *ngIf=\"!isEdit\"></textarea>\n                            <textarea class=\"form-control\" rows=\"3\" id=\"introduction\" formControlName=\"aboutText\"\n                                value=\"{{about['about-text']}}\" *ngIf=\"isEdit\"></textarea>\n                        </div>\n                        <label for=\"basic-info\">Basic Information:</label>\n                        <div class=\"pb-2\">\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"address\">Address:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"address\"\n                                        placeholder=\"{{about['basic-info']['address']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"address\"  id=\"address\"\n                                        value=\"{{about['basic-info']['address']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"age\">Age:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"age\"\n                                        placeholder=\"{{about['basic-info']['age']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"age\" id=\"age\"\n                                        value=\"{{about['basic-info']['age']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"mail\">mail:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"mail\"\n                                        placeholder=\"{{about['basic-info']['mail']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"mail\" id=\"mail\"\n                                        value=\"{{about['basic-info']['mail']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"phone\">Phone:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"phone\"\n                                        placeholder=\"{{about['basic-info']['phone']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"phone\" id=\"phone\"\n                                        value=\"{{about['basic-info']['phone']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"residence\">Residence:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"residence\"\n                                        placeholder=\"{{about['basic-info']['residence']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"residence\"\n                                        id=\"residence\" value=\"{{about['basic-info']['residence']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                        </div>\n                        <label for=\"social-info\">Social Information:</label>\n                        <div class=\"pb-2\">\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"facebook\">Facebook:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"facebook\"\n                                        placeholder=\"{{about['social-info']['fb']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"fb\" id=\"facebook\"\n                                        value=\"{{about['social-info']['fb']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"instgram\">Instgram:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"instgram\"\n                                        placeholder=\"{{about['social-info']['insta']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"insta\" id=\"instgram\"\n                                        value=\"{{about['social-info']['insta']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"twitter\">Twitter:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"twitter\"\n                                        placeholder=\"{{about['social-info']['twiter']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"twiter\" id=\"twitter\"\n                                        value=\"{{about['social-info']['twiter']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row pl-5 pb-1\">\n                                <div class=\"col-md-2\">\n                                    <label for=\"linkedin\">LinkedIn:</label>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <input type=\"text\" class=\"form-control  h-75\" id=\"linkedin\"\n                                        placeholder=\"{{about['social-info']['li']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75\" formControlName=\"li\" id=\"linkedin\"\n                                        value=\"{{about['social-info']['li']}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"isEdit\"><span><i class=\"fa fa-floppy-o\"\n                                    aria-hidden=\"true\"></i></span> Save</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane container fade pl-1 pr-1\" id=\"skills\">\n            <div class=\"font_3 pt-1 text-right pb-1\">\n                <span><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"doEdit(isEdit)\"></i></span>\n            </div>\n            <div class=\"glass_effect p-2\">\n                <div>\n                    <form  [formGroup]=\"skillFormGroup\" (ngSubmit)=\"onSubmitskill(skillFormGroup.value)\">\n                        <div class=\"row\" *ngFor=\"let skill of skills; index as i\">\n                            <div class=\"col-md-2\" formArrayName=\"skillControl\">\n                                <input type=\"text\" class=\"form-control h-75 p-1\" placeholder=\"{{skill['key']}}\" disabled *ngIf=\"!isEdit\">\n                                <input type=\"text\" class=\"form-control h-75 p-1\" formControlName=\"{{i}}\" value=\"{{skill['key']}}\" *ngIf=\"isEdit\">\n                            </div>\n                            <div class=\"col-md-2\" formArrayName=\"skillValueControl\">\n                                <input type=\"number\" class=\"form-control h-75 p-1\"  placeholder=\"{{skill['value']}}\" disabled *ngIf=\"!isEdit\">\n                                <input type=\"number\" class=\"form-control h-75 p-1\"  formControlName=\"{{i}}\" value=\"{{skill['value']}}\" *ngIf=\"isEdit\">\n                            </div>\n                            <div class=\"col-md-8 text-left\" *ngIf=\"isEdit\">\n                                <i id=\"check{{i}}\" class=\"fa fa-minus-square fa-lg text-warning\" aria-hidden=\"true\" (click)=\"removeSkil($event)\"></i   >\n                            </div>\n                        </div>\n                        <div class=\"btn-group\" *ngIf=\"isEdit\">\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addSkill(skills.length)\"><i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"></i> Add</button>\n                            <button type=\"submit\" class=\"btn btn-success btn-sm\"><span><i class=\"fa fa-floppy-o\"\n                                aria-hidden=\"true\"></i></span> Save</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"tab-pane container fade pl-1 pr-1\" id=\"experience\">\n            <div class=\"font_3 pt-1 text-right pb-1\">\n                <span><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"doEdit(isEdit)\"></i></span>\n            </div>\n            <div class=\"glass_effect p-2\">\n                <div>\n                    <form  [formGroup]=\"experienceFormGroup\" (ngSubmit)=\"onSubmitExperience(experienceFormGroup.value)\">\n                        <div *ngFor=\"let exp of experience;index as i\">\n                            <div class=\"row\" *ngIf=\"isEdit\">\n                                <div class=\"col-md-12 text-right pb-1\">\n                                    <i id=\"exper{{i}}\" class=\"fa fa-minus-square fa-lg text-warning\" aria-hidden=\"true\" (click)=\"removeExperience($event)\"></i   >\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <label for=\"firstname\">Work-place:</label>\n                                </div>\n                                <div class=\"col-md-9\" formArrayName=\"workPlace\">\n                                    <input type=\"text\" class=\"form-control h-75 p-1\" id=\"workplace\"\n                                        placeholder=\"{{exp['work-place']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75 p-1\" id=\"workplace\"\n                                        value=\"{{exp['work-place']}}\" formControlName=\"{{i}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <label for=\"firstname\">Work-type:</label>\n                                </div>\n                                <div class=\"col-md-9\" formArrayName=\"workType\">\n                                    <input type=\"text\" class=\"form-control h-75 p-1\" id=\"worktype\"\n                                        placeholder=\"{{exp['work-type']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75 p-1\" id=\"worktype\"\n                                        value=\"{{exp['work-type']}}\" formControlName=\"{{i}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <label for=\"firstname\">Work-duration:</label>\n                                </div>\n                                <div class=\"col-md-9\"  formArrayName=\"workDuration\">\n                                    <input type=\"text\" class=\"form-control h-75 p-1\" id=\"workduration\"\n                                        placeholder=\"{{exp['work-duration']}}\" disabled *ngIf=\"!isEdit\">\n                                    <input type=\"text\" class=\"form-control h-75 p-1\" id=\"workduration\"\n                                        value=\"{{exp['work-duration']}}\" formControlName=\"{{i}}\" *ngIf=\"isEdit\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <label for=\"firstname\">Work-Description:</label>\n                                </div>\n                                <div class=\"col-md-9\"  formArrayName=\"workDesc\">\n                                    <textarea class=\"form-control\" rows=\"3\" id=\"workdesc\"\n                                        placeholder=\"{{exp['work-desc']}}\" disabled *ngIf=\"!isEdit\"></textarea>\n                                    <textarea class=\"form-control\" rows=\"3\" formControlName=\"{{i}}\" id=\"workdesc\" value=\"{{exp['work-desc']}}\"\n                                        *ngIf=\"isEdit\"></textarea>\n                                </div>\n                            </div>\n                            <hr>\n                        </div>\n                        <div class=\"btn-group\" *ngIf=\"isEdit\">\n                            <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addExperience(experience.length)\"><i class=\"fa fa-plus-square-o\" aria-hidden=\"true\"></i> Add</button>\n                            <button type=\"submit\" class=\"btn btn-success btn-sm\"><span><i class=\"fa fa-floppy-o\"\n                                aria-hidden=\"true\"></i></span> Save</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard/feedback-panel/feedback-panel.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/dashboard/feedback-panel/feedback-panel.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"accordion\">\n    <div class=\"card glass_effect font_4\" *ngFor=\"let feed of feedBack;index as i\">\n        <a class=\"collapsed text-decoration-none\" data-toggle=\"collapse\" href=\"#feed{{i}}\">\n            <div class=\"card-header\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <h6><i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{feed['name']}} <small class=\"font-weight-lighter font-italic text-white\">{{feed['email']}}</small></h6>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <h6 class='text-right'><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></h6>\n                    </div>\n                </div>\n            </div>\n        </a>\n        <div id=\"feed{{i}}\" class=\"collapse\" data-parent=\"#accordion\">\n            <div class=\"card-body\">\n                {{feed['message']}}\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row pt-1 font_4 text-white\">\n    <h3 class=\"font_3 pt-5 pl-5 pb-4\"><b><span class=\"text-primary\">|||</span><span class=\"text-white\">Log</span><span class=\"text-primary\">IN</span></b></h3>\n    <div class=\"col-md-10 offset-md-1\">\n        <form>\n            <div class=\"form-group\">\n                <label for=\"user\">User</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter username\" id=\"username\" formControlName=\"username\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter password\" id=\"password\" formControlName=\"password\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> Send Message</button>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog-compnent/blog-compnent.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog-compnent/blog-compnent.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-0\">\n    <article>\n        <header class=\"text-center pt-3 pb-2 bg-primary\">\n            <h1><a href=\"portfolio\"><span class=\"font-logo\">&lt;<span style=\"color:#00fff7\">Being</span><span\n                        class=\"text-white\">Bachelor</span> /&gt;</span></a></h1>\n        </header>\n    </article>\n    <!-- <app-blog-timeline></app-blog-timeline> -->\n    <app-blog-details></app-blog-details>\n    <article class=\"footer\">\n        <footer class=\"text-center pt-2 bg-primary\">\n                <h6 class=\"m-0\">\n                    <a href=\"portfolio\"><span class=\"font-logo\">&lt;<span style=\"color:#00fff7\">Being</span><span\n                    class=\"text-white\">Bachelor</span> /&gt;</span></a> | \n                    <ul class=\"p-0 mb-2 d-inline-flex text-white\" style=\"list-style: none\">\n                        <li class=\"pr-1\"><a href=\"https://www.facebook.com/tikeshv\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-lg\" aria-hidden=\"true\"></i></a></li>\n                        <li class=\"pr-1\"><a href=\"https://www.instagram.com/tikeshv/\" target=\"_blank\"><i class=\"fa fa-instagram fa-lg\"></i></a></li>\n                        <li class=\"pr-1\"><a href=\"https://twitter.com/VermaTikesh\" target=\"_blank\"><i class=\"fa fa-twitter-square fa-lg\"></i></a></li>\n                        <li class=\"pr-1\"><a href=\"https://www.linkedin.com/in/tikesh-verma-165599126/\" target=\"_blank\"><i class=\"fa fa-linkedin-square fa-lg\"></i></a></li>\n                    </ul>\n                </h6>\n        </footer>\n    </article>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog-details/blog-details.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog-details/blog-details.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n    <div class=\"container\">\n        \n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog-timeline/blog-timeline.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog-timeline/blog-timeline.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n        <div class=\"card-columns\">\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg1.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg2.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg3.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg4.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg5.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg6.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg5.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg6.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg5.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg6.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg4.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n            <div class=\"card\">\n                <img class=\"card-img-top\" src=\"./../../../assets/background/bg3.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Card title that wraps to a new line</h5>\n                    <p class=\"card-text\">This is a longer card with supporting text below as a natural lead-in to\n                        additional content. This content is a little bit longer.</p>\n                    <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>\n                </div>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/navigation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top\" (scroll)=\"onWindowScroll($event);\">\n  <a class=\"navbar-brand\" href=\"#\"><span class=\"font-logo\">&lt;<span style=\"color:#00fff7\">Being</span><span\n    class=\"text-white\">Bachelor</span> /&gt;</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\" (click)=\"changeNavSolid()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#home\"><i class=\"fa fa-home fa-lg\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#about\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#skills\">Skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#experience\">Experience</a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"blog\" >Blog</a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#contact\">Contact</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/parallax/parallax.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/parallax/parallax.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  [style.background-image]=\"'url(../../assets/parallax-images/'+backgroundImage+')'\" class=\"parallax\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/about/about.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/component/about/about.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid parallax\" [ngStyle]=\"{'background-image':'url(../../../assets/background/bg5.jpg)','height':'auto'}\">\n    <div class=\"container pt-4 pb-4\">\n        <div class=\"row glass_effect\"> \n            <div class=\"col-12 align-items-center w-100 h-100\">\n                <div class=\"text-left\">\n                    <h3 class=\"font_3 pt-5 pl-5 pb-4\"><b><span class=\"text-primary\">|||</span><span class=\"text-white\">ABOUT</span><span class=\"text-primary\">ME</span></b></h3>\n                    <div class=\"row\">\n                        <div class=\"col-md-4 col-sm-6 col-xs-6 text-center\">\n                            <img src=\"../../../assets/profile/face.jpeg\" class=\"img-fluid w-75 h-75 rounded\" alt=\"...\">\n                        </div>\n                        <div class=\"col-md-8 col-sm-6 col-xs-6\">\n                            <div class=\"desc font_4 text-white\">\n                                <p>{{aboutText}}</p>\n                                    <hr>\n                                <div class=\"row\">\n                                    <div class=\"col-md-11\">\n                                        <div class=\"info-list\">\n                                            <ul class=\"p-0\">\n                                                <li><strong><span class=\"text-primary\">Age:</span></strong> {{basicInfo[\"age\"]}}</li>\n                                                <li><strong><span class=\"text-primary\">Residence:</span></strong> {{basicInfo[\"residence\"]}}</li>\n                                                <li><strong><span class=\"text-primary\">Phone:</span></strong> {{basicInfo[\"phone\"]}}</li>\n                                                <li><strong><span class=\"text-primary\">E-mail:</span></strong> {{basicInfo[\"mail\"]}}</li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-1 text-right\">\n                                        <div class=\"info-list\">\n                                            <ul class=\"p-0\">\n                                                <li><a href=\"{{socialInfo['fb']}}\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-lg\" aria-hidden=\"true\"></i></a></li>\n                                                <li><a href=\"{{socialInfo['insta']}}\" target=\"_blank\"><i class=\"fa fa-instagram fa-lg\"></i></a></li>\n                                                <li><a href=\"{{socialInfo['twiter']}}\" target=\"_blank\"><i class=\"fa fa-twitter-square fa-lg\"></i></a></li>\n                                                <li><a href=\"{{socialInfo['li']}}\" target=\"_blank\"><i class=\"fa fa-linkedin-square fa-lg\"></i></a></li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                       \n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/contact/contact.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/component/contact/contact.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contactData\" class=\"container-fluid parallax\" [ngStyle]=\"{'background-image':'url(../../../assets/background/bg1.jpg)','height':'auto'}\">\n    <div class=\"container pt-4 pb-4\">\n        <div class=\"row glass_effect text-white pb-2\">\n            <h3 class=\"font_3 pt-5 pl-5 pb-4\"><b><span class=\"text-primary\">|||</span><span class=\"text-white\">CONTACT</span><span class=\"text-primary\">ME</span></b></h3>\n            <div class=\"col-md-12\">\n                <div class=\"row text-center\">\n                    <div class=\"col-md-4\">\n                        <div class=\"timeline\">\n                            <div class=\"row d-inline-block\">\n                                <div class=\"d-inline-flex\"><i class=\"fa fa-mobile fa-4x text-primary\" aria-hidden=\"true\"></i><h4 class=\"pt-3 pl-3\"><b> Phone</b></h4></div>\n                                <p class=\"font_4\"><b>{{basicInfo[\"phone\"]}}</b></p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"timeline\">\n                            <div class=\"row d-inline-block\">\n                                <div class=\"d-inline-flex\"><i class=\"fa fa-envelope fa-4x text-primary\"></i><h4 class=\"pt-3 pl-3\"><b> Email</b></h4></div>\n                                <p class=\"font_4\"><b>{{basicInfo[\"mail\"]}}</b></p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"timeline\">\n                            <div class=\"row d-inline-block\">\n                                <div class=\"d-inline-flex\"><i class=\"fa fa-map-marker fa-4x text-primary\" aria-hidden=\"true\"></i><h4 class=\"pt-3 pl-3\"><b> Address</b></h4></div>\n                                <p class=\"font_4\"><b>{{basicInfo[\"address\"]}}</b></p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row pt-1 font_4\">\n                    <div class=\"col-md-8 offset-md-2\">\n                        <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\n                            <div class=\"form-group\">\n                                <label for=\"pwd\">Name</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" id=\"name\" formControlName=\"name\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"email\">Email</label>\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" id=\"email\" formControlName=\"email\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"pwd\">Message</label>\n                                <textarea class=\"form-control\" rows=\"3\" id=\"comment\" placeholder=\"Enter message\" formControlName=\"message\"></textarea>\n                            </div>\n                            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> Send Message</button>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"info-list text-center col-md-8 offset-md-2\">\n                    <hr>\n                    <ul class=\"p-0 d-inline-flex\">\n                        <li><a  class=\"font-logo pt-1\" href=\"#home\">&lt;<span style=\"color:#00fff7\">Being</span><span\n                            class=\"text-white\">Bachelor</span> /&gt;</a> | </li>\n                        <li><a href=\"{{socialInfo['fb']}}\" target=\"_blank\"><i class=\"fa fa-facebook-square fa-2x\" aria-hidden=\"true\"></i></a></li>\n                        <li><a href=\"{{socialInfo['insta']}}\" target=\"_blank\"><i class=\"fa fa-instagram fa-2x\"></i></a></li>\n                        <li><a href=\"{{socialInfo['twiter']}}\" target=\"_blank\"><i class=\"fa fa-twitter-square fa-2x\"></i></a></li>\n                        <li><a href=\"{{socialInfo['li']}}\" target=\"_blank\"><i class=\"fa fa-linkedin-square fa-2x\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/experience/experience.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/component/experience/experience.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid parallax\" [ngStyle]=\"{'background-image':'url(../../../assets/background/bg6.jpg)','height':'auto'}\">\n    <div class=\"container pt-4 pb-4\">\n        <div class=\"row glass_effect text-white pb-5\">\n            <h3 class=\"font_3 text-truncate pt-5 pl-5 pb-4\"><b><span class=\"text-primary\">|||</span><span class=\"text-white\">WORK</span><span class=\"text-primary\">EXPERIENCE</span></b></h3>\n            <div class=\"col-md-10 offset-md-1\">\n                <ul class=\"timeline pl-3\">\n                    <li class=\"font_4\" *ngFor=\"let work of workExperience;\">\n                        <a href=\"#\" >{{ work[\"work-place\"] | uppercase }} | {{ work[\"work-type\"] | uppercase }}</a>\n                        <a class=\"float-right text-primary\">{{ work[\"work-duration\"] | uppercase }}</a>\n                        <p>{{ work[\"work-desc\"]}} </p>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/home/home.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/component/home/home.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\" [ngStyle]=\"{'background-image':'url(../../../assets/background/parallax5.jpg)','z-index':'1'}\">\n    <div class=\"container h-100\">\n        <div class=\"row h-100 align-items-center\">\n          <div class=\"col-12 text-left\">\n            <h1 class=\"font_0 display-3 font-weight-bold text-white\">I<span class=\"text-primary\">'</span>M</h1>\n            <h1 class=\"font_0 display-3 font-weight-bold text-white\">{{firstName | uppercase}}</h1>\n            <h1 class=\"font_0 display-3 font-weight-bold text-white\">{{secondName | uppercase}}<span class=\"text-primary\">.</span></h1>\n            <!-- <h3 class=\"font_3 text-white\">DEVELOPER <span class=\"text-primary\">|</span> DESIGNER</h3> -->\n            <h3 class=\"font_3 text-white\"><span *ngFor=\"let desig of designation; index as i; last as isLast\">{{desig | uppercase}}<span class=\"text-primary\" *ngIf=\"!isLast\">|</span></span></h3>\n          </div>\n        </div>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/skills/skills.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/component/skills/skills.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid parallax\" [ngStyle]=\"{'background-image':'url(../../../assets/background/bg2.jpg)','height':'auto'}\">\n    <div class=\"container pt-4 pb-4\">\n        <div class=\"row glass_effect text-white pb-5\">\n            <h3 class=\"font_3 pt-5 pl-5 pb-4\"><b><span class=\"text-primary\">|||</span><span class=\"text-white\">MY</span><span class=\"text-primary\">SKILLS</span></b></h3>\n            <div class=\"col-md-10 offset-md-1\">\n                <div class=\"row pb-4\" *ngFor=\"let skill of skills\">\n                    <div class=\"col-md-1\">{{skill['key']}}</div>\n                    <div class=\"col-md-10\">\n                        <div class=\"progress\" style=\"height:20px\">\n                            <div class=\"progress-bar\" [ngStyle]=\"{'width':+skill['value']+'%','height':'20px'}\"></div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-1\">{{skill['value']}}%</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<app-home *ngIf=\"homeData\"  [homeData]=\"homeData\" id=\"home\"></app-home>\n<app-about *ngIf=\"aboutData\" [aboutData]='aboutData' id=\"about\"></app-about>\n<app-skills *ngIf=\"skills\" [skillData]=\"skills\" id=\"skills\"></app-skills>\n<app-experience *ngIf=\"workData\" [workData]=\"workData\" id=\"experience\"></app-experience>\n<app-contact *ngIf=\"contactData.length!=0\" [contactData]=\"contactData\" id=\"contact\"></app-contact>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glass_effect {\n  background-color: rgba(115, 120, 123, 0.68);\n  box-shadow: 5px -5px 13px #404a4c; }\n\na {\n  color: white; }\n\na:hover {\n  color: #007bff; }\n\nhr {\n  border: 0.5px solid #007bff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQTJDO0VBQzNDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLGNBQWEsRUFBQTs7QUFHZjtFQUNFLDJCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2xhc3NfZWZmZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTIwLCAxMjMsIDAuNjgpO1xuICAgIGJveC1zaGFkb3c6IDVweCAtNXB4IDEzcHggIzQwNGE0YztcbiAgfVxuXG4gIGF7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbiAgYTpob3ZlcntcbiAgICBjb2xvcjojMDA3YmZmO1xuICB9XG4gIFxuICBocntcbiAgICBib3JkZXIgOiAwLjVweCBzb2xpZCAjMDA3YmZmO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-getter.service */ "./src/app/services/data-getter.service.ts");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(pageDataObj) {
        this.pageDataObj = pageDataObj;
        this.isPageData = false;
        //this.pageData = pageDataObj.data.default;
    }
    AdminComponent.prototype.getPageData = function () {
        var _this = this;
        this.pageDataObj.getPageData().then(function (result) {
            _this.setPageData(result);
        }, function (error) {
            console.error(error);
        });
    };
    AdminComponent.prototype.setPageData = function (pageObj) {
        if (pageObj != undefined) {
            this.isPageData = true;
        }
        this.pageData = pageObj;
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.getPageData();
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 0 auto;\n  /* Added */\n  float: none;\n  /* Added */\n  margin-bottom: 10px;\n  /* Added */ }\n\n.glass_effect {\n  background-color: rgba(68, 74, 78, 0.68);\n  box-shadow: 5px -5px 13px #404a4c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQUUsVUFBQTtFQUNoQixXQUFXO0VBQUUsVUFBQTtFQUNiLG1CQUFtQjtFQUFFLFVBQUEsRUFBVzs7QUFFcEM7RUFDSSx3Q0FBd0M7RUFDeEMsaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvOyAvKiBBZGRlZCAqL1xuICAgIGZsb2F0OiBub25lOyAvKiBBZGRlZCAqL1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IC8qIEFkZGVkICovXG59XG4uZ2xhc3NfZWZmZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCA3NCwgNzgsIDAuNjgpO1xuICAgIGJveC1zaGFkb3c6IDVweCAtNXB4IDEzcHggIzQwNGE0YztcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.showPanel = true;
        this.editPanel = false;
        this.feedbackPanel = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        //console.log(this.userData)
    };
    DashboardComponent.prototype.togglePanel = function (show, panel) {
        show == true ? this.showPanel = false : this.showPanel = true;
        panel == 'editPanel' ? this.editPanel = true : this.editPanel = false;
        panel == 'feedbackPanel' ? this.feedbackPanel = true : this.feedbackPanel = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DashboardComponent.prototype, "userData", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/edit-panel/edit-panel.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/dashboard/edit-panel/edit-panel.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glass_effect {\n  background-color: rgba(68, 74, 78, 0.68);\n  box-shadow: 5px -5px 13px #404a4c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9lZGl0LXBhbmVsL2VkaXQtcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3Q0FBd0M7RUFDeEMsaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvZWRpdC1wYW5lbC9lZGl0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdsYXNzX2VmZmVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgNzQsIDc4LCAwLjY4KTtcbiAgICBib3gtc2hhZG93OiA1cHggLTVweCAxM3B4ICM0MDRhNGM7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/admin/dashboard/edit-panel/edit-panel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/dashboard/edit-panel/edit-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: EditPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPanelComponent", function() { return EditPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data-getter.service */ "./src/app/services/data-getter.service.ts");




var EditPanelComponent = /** @class */ (function () {
    function EditPanelComponent(dataSetter) {
        this.dataSetter = dataSetter;
        this.isEdit = false;
        this.isChecked = false;
        this.skillControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.skillValueControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        this.homeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.aboutFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            aboutText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            residence: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fb: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            insta: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            twiter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            li: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.skillFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            skillControl: this.skillControl,
            skillValueControl: this.skillValueControl
        });
        this.experienceFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            workPlace: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            workType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            workDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            workDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    }
    EditPanelComponent.prototype.ngOnInit = function () {
        this.setPageData(this.data);
    };
    EditPanelComponent.prototype.setPageData = function (dataObj) {
        this.home = dataObj["home-page"];
        this.about = dataObj["about-page"];
        this.skills = dataObj["skill-page"];
        this.experience = dataObj["work-experience"];
        this.setHomeData();
        this.setAboutData();
        this.setSkillData();
        this.setExperienceData();
        console.log(dataObj);
    };
    EditPanelComponent.prototype.doEdit = function (isOpt) {
        isOpt == true ? this.isEdit = false : this.isEdit = true;
    };
    //######################################### Home Data #################################
    EditPanelComponent.prototype.setHomeData = function () {
        this.homeFormGroup.reset();
        this.homeFormGroup.controls['firstname'].setValue(this.home['first-name']);
        this.homeFormGroup.controls['lastname'].setValue(this.home['second-name']);
        this.homeFormGroup.controls['designation'].setValue(this.home['designation'].join());
    };
    EditPanelComponent.prototype.onSubmitHome = function (formData) {
        var homePageObj = {};
        var homeObj = {};
        homeObj['first-name'] = formData['firstname'];
        homeObj['second-name'] = formData['lastname'];
        homeObj['designation'] = formData['designation'].split(',');
        homePageObj['home-page'] = homeObj;
        homePageObj['key'] = 'home-page';
        this.dataSetter.updateUserData(homePageObj).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.data['home-page'] = homeObj;
        this.setPageData(this.data);
        this.isEdit = false;
    };
    //######################################### Home Data #################################
    //######################################### About Data #################################
    EditPanelComponent.prototype.setAboutData = function () {
        this.aboutFormGroup.reset();
        this.aboutFormGroup.controls['aboutText'].setValue(this.about['about-text']);
        this.aboutFormGroup.controls['address'].setValue(this.about['basic-info']['address']);
        this.aboutFormGroup.controls['age'].setValue(this.about['basic-info']['age']);
        this.aboutFormGroup.controls['mail'].setValue(this.about['basic-info']['mail']);
        this.aboutFormGroup.controls['phone'].setValue(this.about['basic-info']['phone']);
        this.aboutFormGroup.controls['residence'].setValue(this.about['basic-info']['residence']);
        this.aboutFormGroup.controls['fb'].setValue(this.about['social-info']['fb']);
        this.aboutFormGroup.controls['insta'].setValue(this.about['social-info']['insta']);
        this.aboutFormGroup.controls['twiter'].setValue(this.about['social-info']['twiter']);
        this.aboutFormGroup.controls['li'].setValue(this.about['social-info']['li']);
    };
    EditPanelComponent.prototype.onSubmitAbout = function (formData) {
        var aboutObj = {};
        aboutObj['about-text'] = formData['aboutText'];
        var basiInfo = {};
        basiInfo['age'] = formData['age'];
        basiInfo['address'] = formData['address'];
        basiInfo['mail'] = formData['mail'];
        basiInfo['phone'] = formData['phone'];
        basiInfo['residence'] = formData['residence'];
        aboutObj['basic-info'] = basiInfo;
        var socialInfo = {};
        socialInfo['fb'] = formData['fb'];
        socialInfo['insta'] = formData['insta'];
        socialInfo['twiter'] = formData['twiter'];
        socialInfo['li'] = formData['li'];
        aboutObj['social-info'] = socialInfo;
        var aboutDataObj = {};
        aboutDataObj['key'] = 'about-page';
        aboutDataObj['about-page'] = aboutObj;
        //this.dataSetter.updateUserData(aboutObj);
        this.dataSetter.updateUserData(aboutDataObj).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.data["about-page"] = aboutObj;
        this.setPageData(this.data);
        this.isEdit = false;
    };
    //######################################### About Data #################################
    //######################################### Skill Data #################################
    EditPanelComponent.prototype.setSkillData = function () {
        var _this = this;
        this.skillFormGroup.reset();
        this.skillFormGroup.controls.skillControl.clear();
        this.skillFormGroup.controls.skillValueControl.clear();
        this.skills.forEach(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i);
            control.setValue(o['key']);
            _this.skillFormGroup.controls.skillControl.push(control);
            var controlValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i);
            controlValue.setValue(o['value']);
            _this.skillFormGroup.controls.skillValueControl.push(controlValue);
        });
    };
    EditPanelComponent.prototype.onSubmitskill = function (formData) {
        var skillObj = {};
        var skillArray = [];
        formData['skillControl'].forEach(function (o, i) {
            var skill = {};
            skill['key'] = o;
            skill['value'] = formData['skillValueControl'][i] + "";
            skillArray.push(skill);
        });
        skillObj['skill-page'] = skillArray;
        skillObj['key'] = 'skill-page';
        //this.dataSetter.updateUserData(skillObj);
        this.dataSetter.updateUserData(skillObj).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.data['skill-page'] = skillArray;
        this.setPageData(this.data);
        this.isEdit = false;
    };
    EditPanelComponent.prototype.removeSkil = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        target.className = 'fa fa-minus-square fa-lg text-danger';
        var index = (target.attributes.id.nodeValue).slice(5);
        console.log("To delete index:" + index);
        this.skillFormGroup.controls.skillControl.removeAt(index);
        this.skillFormGroup.get("skillValueControl").removeAt(index);
    };
    EditPanelComponent.prototype.addSkill = function (index) {
        console.log(index);
        var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](index + 1);
        control.setValue('New skill');
        this.skillFormGroup.get("skillControl").push(control);
        // (this.skillFormGroup.controls.skillControl as FormArray).push(control);
        var controlValue = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](index + 1);
        controlValue.setValue('Skill value');
        this.skillFormGroup.get("skillValueControl").push(controlValue);
        var skillObj = this.data['skill-page'];
        // let skillArray = [];
        var skill = {};
        skill['key'] = "New Skill";
        skill['value'] = "0";
        skillObj.push(skill);
        // skillObj['skill-page'] = skillArray;
        this.data['skill-page'] = skillObj;
        // this.setPageData(this.data);
    };
    //######################################### Skill Data #################################
    //######################################### Experience Data #################################
    EditPanelComponent.prototype.setExperienceData = function () {
        var _this = this;
        this.experienceFormGroup.reset();
        this.experienceFormGroup.controls.workPlace.clear();
        this.experienceFormGroup.controls.workType.clear();
        this.experienceFormGroup.controls.workDuration.clear();
        this.experienceFormGroup.controls.workDesc.clear();
        this.experience.forEach(function (o, i) {
            var place = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i);
            place.setValue(o['work-place']);
            _this.experienceFormGroup.controls.workPlace.push(place);
            var type = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i);
            type.setValue(o['work-type']);
            _this.experienceFormGroup.controls.workType.push(type);
            var duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i);
            duration.setValue(o['work-duration']);
            _this.experienceFormGroup.controls.workDuration.push(duration);
            var descrp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i);
            descrp.setValue(o['work-desc']);
            _this.experienceFormGroup.controls.workDesc.push(descrp);
        });
    };
    EditPanelComponent.prototype.onSubmitExperience = function (formData) {
        var experienceObj = {};
        var expArray = [];
        formData['workPlace'].forEach(function (o, i) {
            var workExp = {};
            workExp['work-place'] = o;
            workExp['work-type'] = formData['workType'][i];
            workExp['work-duration'] = formData['workDuration'][i];
            workExp['work-desc'] = formData['workDesc'][i];
            expArray.push(workExp);
        });
        experienceObj['work-experience'] = expArray;
        experienceObj['key'] = 'work-experience';
        //this.dataSetter.updateUserData(experienceObj);
        this.dataSetter.updateUserData(experienceObj).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.data['work-experience'] = expArray;
        this.setPageData(this.data);
        this.isEdit = false;
    };
    EditPanelComponent.prototype.removeExperience = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        target.className = 'fa fa-minus-square fa-lg text-danger';
        var index = (target.attributes.id.nodeValue).slice(5);
        console.log("To delete index:" + index);
        this.experienceFormGroup.controls.workPlace.removeAt(index);
        this.experienceFormGroup.controls.workType.removeAt(index);
        this.experienceFormGroup.controls.workDuration.removeAt(index);
        this.experienceFormGroup.controls.workDesc.removeAt(index);
    };
    EditPanelComponent.prototype.addExperience = function (index) {
        var place = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](index);
        place.setValue("Place");
        this.experienceFormGroup.controls.workPlace.push(place);
        var type = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](index);
        type.setValue("Type");
        this.experienceFormGroup.controls.workType.push(type);
        var duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](index);
        duration.setValue("Duration");
        this.experienceFormGroup.controls.workDuration.push(duration);
        var descrp = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](index);
        descrp.setValue("Description");
        this.experienceFormGroup.controls.workDesc.push(descrp);
        var expArray = this.data['work-experience'];
        var workExp = {};
        workExp['work-place'] = "Place";
        workExp['work-type'] = "Type";
        workExp['work-duration'] = "Duration";
        workExp['work-desc'] = "Designation";
        expArray.push(workExp);
        this.data['work-experience'] = expArray;
    };
    EditPanelComponent.ctorParameters = function () { return [
        { type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_3__["DataGetterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EditPanelComponent.prototype, "data", void 0);
    EditPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-panel',
            template: __webpack_require__(/*! raw-loader!./edit-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard/edit-panel/edit-panel.component.html"),
            styles: [__webpack_require__(/*! ./edit-panel.component.scss */ "./src/app/admin/dashboard/edit-panel/edit-panel.component.scss")]
        })
    ], EditPanelComponent);
    return EditPanelComponent;
}());



/***/ }),

/***/ "./src/app/admin/dashboard/feedback-panel/feedback-panel.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/dashboard/feedback-panel/feedback-panel.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glass_effect {\n  background-color: rgba(68, 74, 78, 0.68);\n  box-shadow: 5px -5px 13px #404a4c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9mZWVkYmFjay1wYW5lbC9mZWVkYmFjay1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUF3QztFQUN4QyxpQ0FBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9mZWVkYmFjay1wYW5lbC9mZWVkYmFjay1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbGFzc19lZmZlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDc0LCA3OCwgMC42OCk7XG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTNweCAjNDA0YTRjO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/admin/dashboard/feedback-panel/feedback-panel.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/dashboard/feedback-panel/feedback-panel.component.ts ***!
  \****************************************************************************/
/*! exports provided: FeedbackPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPanelComponent", function() { return FeedbackPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data-getter.service */ "./src/app/services/data-getter.service.ts");



var FeedbackPanelComponent = /** @class */ (function () {
    function FeedbackPanelComponent(dataGetterOBj) {
        this.dataGetterOBj = dataGetterOBj;
    }
    FeedbackPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataGetterOBj.getFeedBackData().then(function (result) {
            _this.feedBack = result;
        }, function (error) {
            console.error(error);
        });
    };
    FeedbackPanelComponent.ctorParameters = function () { return [
        { type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"] }
    ]; };
    FeedbackPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feedback-panel',
            template: __webpack_require__(/*! raw-loader!./feedback-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/dashboard/feedback-panel/feedback-panel.component.html"),
            styles: [__webpack_require__(/*! ./feedback-panel.component.scss */ "./src/app/admin/dashboard/feedback-panel/feedback-panel.component.scss")]
        })
    ], FeedbackPanelComponent);
    return FeedbackPanelComponent;
}());



/***/ }),

/***/ "./src/app/admin/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/admin/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_blog_compnent_blog_compnent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog-compnent/blog-compnent.component */ "./src/app/blog/blog-compnent/blog-compnent.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");






var routes = [
    { path: '', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: 'blog', component: _blog_blog_compnent_blog_compnent_component__WEBPACK_IMPORTED_MODULE_3__["BlogCompnentComponent"] },
    { path: 'portfolio/admin-page', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'porfolio';
        this.blog = false;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parallax/parallax.component */ "./src/app/parallax/parallax.component.ts");
/* harmony import */ var _portfolio_component_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/component/home/home.component */ "./src/app/portfolio/component/home/home.component.ts");
/* harmony import */ var _portfolio_component_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/component/about/about.component */ "./src/app/portfolio/component/about/about.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _portfolio_component_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/component/experience/experience.component */ "./src/app/portfolio/component/experience/experience.component.ts");
/* harmony import */ var _portfolio_component_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portfolio/component/skills/skills.component */ "./src/app/portfolio/component/skills/skills.component.ts");
/* harmony import */ var _portfolio_component_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio/component/contact/contact.component */ "./src/app/portfolio/component/contact/contact.component.ts");
/* harmony import */ var _blog_blog_compnent_blog_compnent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blog/blog-compnent/blog-compnent.component */ "./src/app/blog/blog-compnent/blog-compnent.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _blog_blog_timeline_blog_timeline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog/blog-timeline/blog-timeline.component */ "./src/app/blog/blog-timeline/blog-timeline.component.ts");
/* harmony import */ var _blog_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blog/blog-details/blog-details.component */ "./src/app/blog/blog-details/blog-details.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_dashboard_edit_panel_edit_panel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/dashboard/edit-panel/edit-panel.component */ "./src/app/admin/dashboard/edit-panel/edit-panel.component.ts");
/* harmony import */ var _admin_dashboard_feedback_panel_feedback_panel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/dashboard/feedback-panel/feedback-panel.component */ "./src/app/admin/dashboard/feedback-panel/feedback-panel.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _parallax_parallax_component__WEBPACK_IMPORTED_MODULE_8__["ParallaxComponent"],
                _portfolio_component_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _portfolio_component_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _portfolio_component_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"],
                _portfolio_component_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"],
                _portfolio_component_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _blog_blog_compnent_blog_compnent_component__WEBPACK_IMPORTED_MODULE_15__["BlogCompnentComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioComponent"],
                _blog_blog_timeline_blog_timeline_component__WEBPACK_IMPORTED_MODULE_17__["BlogTimelineComponent"],
                _blog_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_18__["BlogDetailsComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"],
                _admin_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _admin_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_21__["DashboardComponent"],
                _admin_dashboard_edit_panel_edit_panel_component__WEBPACK_IMPORTED_MODULE_22__["EditPanelComponent"],
                _admin_dashboard_feedback_panel_feedback_panel_component__WEBPACK_IMPORTED_MODULE_23__["FeedbackPanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog-compnent/blog-compnent.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/blog/blog-compnent/blog-compnent.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: white; }\n\na:hover {\n  text-decoration: none;\n  color: #00fff7; }\n\n.footer {\n  position: fixed;\n  bottom: 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL2Jsb2cvYmxvZy1jb21wbmVudC9ibG9nLWNvbXBuZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBWSxFQUFBOztBQUVkO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1jb21wbmVudC9ibG9nLWNvbXBuZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIFxuICBjb2xvcjogd2hpdGU7XG59XG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwZmZmNztcbn1cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/blog/blog-compnent/blog-compnent.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/blog/blog-compnent/blog-compnent.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogCompnentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCompnentComponent", function() { return BlogCompnentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogCompnentComponent = /** @class */ (function () {
    function BlogCompnentComponent() {
    }
    BlogCompnentComponent.prototype.ngOnInit = function () {
    };
    BlogCompnentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-compnent',
            template: __webpack_require__(/*! raw-loader!./blog-compnent.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog-compnent/blog-compnent.component.html"),
            styles: [__webpack_require__(/*! ./blog-compnent.component.scss */ "./src/app/blog/blog-compnent/blog-compnent.component.scss")]
        })
    ], BlogCompnentComponent);
    return BlogCompnentComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-details/blog-details.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/blog/blog-details/blog-details.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/blog/blog-details/blog-details.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/blog/blog-details/blog-details.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function() { return BlogDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogDetailsComponent = /** @class */ (function () {
    function BlogDetailsComponent() {
    }
    BlogDetailsComponent.prototype.ngOnInit = function () {
    };
    BlogDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-details',
            template: __webpack_require__(/*! raw-loader!./blog-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog-details/blog-details.component.html"),
            styles: [__webpack_require__(/*! ./blog-details.component.scss */ "./src/app/blog/blog-details/blog-details.component.scss")]
        })
    ], BlogDetailsComponent);
    return BlogDetailsComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog-timeline/blog-timeline.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/blog/blog-timeline/blog-timeline.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy10aW1lbGluZS9ibG9nLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/blog-timeline/blog-timeline.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/blog/blog-timeline/blog-timeline.component.ts ***!
  \***************************************************************/
/*! exports provided: BlogTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogTimelineComponent", function() { return BlogTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogTimelineComponent = /** @class */ (function () {
    function BlogTimelineComponent() {
    }
    BlogTimelineComponent.prototype.ngOnInit = function () {
    };
    BlogTimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-timeline',
            template: __webpack_require__(/*! raw-loader!./blog-timeline.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog-timeline/blog-timeline.component.html"),
            styles: [__webpack_require__(/*! ./blog-timeline.component.scss */ "./src/app/blog/blog-timeline/blog-timeline.component.scss")]
        })
    ], BlogTimelineComponent);
    return BlogTimelineComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: transparent;\n  border: none;\n  color: white;\n  z-index: 100000;\n  -webkit-transition: background-color 1s ease-out 0s;\n  transition: background-color 1s ease-out 0s;\n  -webkit-transition-duration: 0.4s;\n          transition-duration: 0.4s; }\n\n.navbar-expand-md .navbar-brand {\n  color: #FFF; }\n\n.navbar-expand-md .navbar-toggle {\n  border-color: white; }\n\n.navbar-expand-md .navbar-toggle:hover, .navbar-expand-md .navbar-toggle:focus {\n    background-color: #014576; }\n\n.navbar-expand-md .navbar-toggle .icon-bar {\n    color: white;\n    background-color: white; }\n\n.navbar-expand-md .navbar-collapse.collapse.in ul {\n  background-color: #014576; }\n\n/* Solid class attached on scroll past first section */\n\n.navbar.solid {\n  background-color: #014576;\n  -webkit-transition: background-color 1s ease-out 0s;\n  transition: background-color 1s ease-out 0s;\n  -webkit-transition-duration: 0.4s;\n          transition-duration: 0.4s;\n  box-shadow: 0 0 4px grey; }\n\n.navbar.solid .navbar-brand {\n    color: white;\n    -webkit-transition: color 1s ease-out 0s;\n    transition: color 1s ease-out 0s;\n    -webkit-transition-duration: 0.4s;\n            transition-duration: 0.4s; }\n\n.navbar.solid .navbar-nav > li > a {\n    color: white;\n    -webkit-transition: color 1s ease-out 0s;\n    transition: color 1s ease-out 0s;\n    -webkit-transition-duration: 0.4s;\n            transition-duration: 0.4s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixtREFBMkM7RUFBM0MsMkNBQTJDO0VBQzNDLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFJM0I7RUFHSyxXQUFVLEVBQUE7O0FBSGY7RUFRSSxtQkFBbUIsRUFBQTs7QUFSdkI7SUFXUSx5QkFBeUIsRUFBQTs7QUFYakM7SUFpQlEsWUFBWTtJQUNaLHVCQUF1QixFQUFBOztBQWxCL0I7RUF3QkkseUJBQXlCLEVBQUE7O0FBTzdCLHNEQUFBOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1EQUEyQztFQUEzQywyQ0FBMkM7RUFDM0MsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6Qix3QkFBd0IsRUFBQTs7QUFKMUI7SUFPTSxZQUFZO0lBQ1osd0NBQWdDO0lBQWhDLGdDQUFnQztJQUNoQyxpQ0FBeUI7WUFBekIseUJBQXlCLEVBQUE7O0FBVC9CO0lBaUJZLFlBQVk7SUFDWix3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0lBQ2hDLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTAwMDAwO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZS1vdXQgMHM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgfVxuICBcbiAgXG4gIC5uYXZiYXItZXhwYW5kLW1kIHtcbiAgICBcbiAgICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgY29sb3I6I0ZGRjtcbiAgICAgfVxuICBcbiAgICAvL0NvbGxhcHNlZCBzdHlsZXNcbiAgICAubmF2YmFyLXRvZ2dsZSB7XG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBcbiAgICAgICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNDU3NjtcbiAgICAgICAgfVxuICBcbiAgXG4gIFxuICAgICAgICAuaWNvbi1iYXIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgXG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2UuaW4gdWwge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNDU3NjtcbiAgICB9XG4gICAgICBcbiAgfSAvL2VuZCAubmF2YmFyLWRlZmF1bHRcbiAgXG4gIFxuICBcbiAgLyogU29saWQgY2xhc3MgYXR0YWNoZWQgb24gc2Nyb2xsIHBhc3QgZmlyc3Qgc2VjdGlvbiAqL1xuICBcbiAgLm5hdmJhci5zb2xpZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNDU3NjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2Utb3V0IDBzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCBncmV5O1xuICBcbiAgICAgIC5uYXZiYXItYnJhbmQge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDFzIGVhc2Utb3V0IDBzO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgfVxuICBcbiAgICAgIC5uYXZiYXItbmF2IHtcbiAgXG4gICAgICAgICA+IGxpIHtcbiAgXG4gICAgICAgICAgICA+IGEge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDFzIGVhc2Utb3V0IDBzO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgIH0gLy9lbmQgbGlcbiAgXG4gICAgICB9IC8vZW5kIC5uYXZiYXItbmF2XG4gIFxuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.check = false;
    }
    NavigationComponent.prototype.onWindowScroll = function (e) {
        var element = document.querySelector('.navbar');
        if (window.pageYOffset > element.clientHeight) {
            element.classList.add('solid');
        }
        else {
            element.classList.remove('solid');
        }
    };
    NavigationComponent.prototype.changeNavSolid = function () {
        var element = document.querySelector('.navbar');
        if (this.check == false) {
            element.classList.add('solid');
            this.check = true;
        }
        else {
            element.classList.remove('solid');
            this.check = false;
        }
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        /* Scroll up or down effect*/
        // var lastScrollTop = 0;
        // $(window).scroll(function(event){
        //    var st = $(this).scrollTop();
        //    if (st > lastScrollTop){
        //     $('.navbar').addClass('solid');
        //    } else {
        //     $('.navbar').removeClass('solid');
        //    }
        //    lastScrollTop = st;
        // });
        /* Fading and unfading effect */
        // $(document).ready(function() {
        //   // Transition effect for navbar 
        //   $(window).scroll(function() {
        //     // checks if window is scrolled more than 500px, adds/removes solid class
        //     if($(this).scrollTop() > 20) { 
        //         $('.navbar').addClass('solid');
        //     } else {
        //         $('.navbar').removeClass('solid');
        //     }
        //   });
        // });
        /* Toggling div after nav bar */
        // The function actually applying the offset
        function offsetAnchor() {
            if (location.hash.length !== 0) {
                window.scrollTo(window.scrollX, window.scrollY - 50);
            }
        }
        // Captures click events of all a elements with href starting with #
        $(document).on('click', 'a[href^="#"]', function (event) {
            // Click events are captured before hashchanges. Timeout
            // causes offsetAnchor to be called after the page jump.
            window.setTimeout(function () {
                offsetAnchor();
            }, 0);
        });
        // Set the offset when entering page with hash present in the url
        window.setTimeout(offsetAnchor, 0);
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
    ], NavigationComponent.prototype, "onWindowScroll", null);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/parallax/parallax.component.scss":
/*!**************************************************!*\
  !*** ./src/app/parallax/parallax.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax {\n  /* The image used */\n  /* Full height */\n  height: 100%;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL3BhcmFsbGF4L3BhcmFsbGF4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFHQSxnQkFBQTtFQUNBLFlBQVk7RUFFWix5Q0FBQTtFQUNBLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFyYWxsYXgvcGFyYWxsYXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYWxsYXgge1xuICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdfcGFyYWxsYXguanBnJyk7XG4gIFxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgXG4gICAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/parallax/parallax.component.ts":
/*!************************************************!*\
  !*** ./src/app/parallax/parallax.component.ts ***!
  \************************************************/
/*! exports provided: ParallaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxComponent", function() { return ParallaxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParallaxComponent = /** @class */ (function () {
    function ParallaxComponent() {
    }
    ParallaxComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ParallaxComponent.prototype, "backgroundImage", void 0);
    ParallaxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parallax',
            template: __webpack_require__(/*! raw-loader!./parallax.component.html */ "./node_modules/raw-loader/index.js!./src/app/parallax/parallax.component.html"),
            styles: [__webpack_require__(/*! ./parallax.component.scss */ "./src/app/parallax/parallax.component.scss")]
        })
    ], ParallaxComponent);
    return ParallaxComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/component/about/about.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/portfolio/component/about/about.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glass_effect {\n  background-color: rgba(115, 120, 123, 0.68);\n  box-shadow: 5px -5px 13px #404a4c; }\n\n.info-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.info-list ul li {\n    display: inline-block;\n    vertical-align: top;\n    width: 100%; }\n\na {\n  color: white; }\n\na:hover {\n  color: #007bff; }\n\nhr {\n  border: 0.5px solid #007bff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL3BvcnRmb2xpby9jb21wb25lbnQvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBMkM7RUFDM0MsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBSFo7SUFLSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTs7QUFHZjtFQUNFLFlBQVcsRUFBQTs7QUFFYjtFQUNFLGNBQWEsRUFBQTs7QUFHZjtFQUNFLDJCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbGFzc19lZmZlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExNSwgMTIwLCAxMjMsIDAuNjgpO1xuICBib3gtc2hhZG93OiA1cHggLTVweCAxM3B4ICM0MDRhNGM7XG59XG4uaW5mby1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAgdWwgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgfVxufVxuYXtcbiAgY29sb3I6d2hpdGU7XG59XG5hOmhvdmVye1xuICBjb2xvcjojMDA3YmZmO1xufVxuXG5ocntcbiAgYm9yZGVyIDogMC41cHggc29saWQgIzAwN2JmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/portfolio/component/about/about.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/portfolio/component/about/about.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.basicInfo = [];
        this.socialInfo = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        var about = this.aboutData;
        this.aboutText = about["about-text"];
        this.basicInfo = about["basic-info"];
        this.socialInfo = about["social-info"];
        console.log(about);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AboutComponent.prototype, "aboutData", void 0);
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/portfolio/component/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/component/contact/contact.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/portfolio/component/contact/contact.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glass_effect {\n  background-color: rgba(68, 74, 78, 0.68);\n  box-shadow: 5px -5px 13px #404a4c; }\n\n.info-list ul {\n  list-style: none; }\n\n.info-list a {\n  color: white; }\n\n.info-list a:hover {\n  color: #007bff; }\n\n.info-list li {\n  padding-left: 10px; }\n\nhr {\n  border: 0.5px solid #007bff; }\n\na {\n  color: white; }\n\na:hover {\n  color: #FFF;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL3BvcnRmb2xpby9jb21wb25lbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQXdDO0VBQ3hDLGlDQUFpQyxFQUFBOztBQUdyQztFQUNLLGdCQUFnQixFQUFBOztBQURyQjtFQUdJLFlBQVcsRUFBQTs7QUFIZjtFQU1JLGNBQWEsRUFBQTs7QUFOakI7RUFRSyxrQkFBa0IsRUFBQTs7QUFHdkI7RUFDRSwyQkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxZQUFXLEVBQUE7O0FBRWI7RUFDRSxXQUFVO0VBQ1YscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50L2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbGFzc19lZmZlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjgsIDc0LCA3OCwgMC42OCk7XG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTNweCAjNDA0YTRjO1xuICB9XG5cbi5pbmZvLWxpc3R7XG4gIHVse2xpc3Qtc3R5bGU6IG5vbmU7fVxuICBhe1xuICAgIGNvbG9yOndoaXRlO1xuICB9XG4gIGE6aG92ZXJ7XG4gICAgY29sb3I6IzAwN2JmZjtcbiAgfVxuICBsaXtwYWRkaW5nLWxlZnQ6IDEwcHh9XG59XG5cbmhye1xuICBib3JkZXIgOiAwLjVweCBzb2xpZCAjMDA3YmZmO1xufVxuXG5he1xuICBjb2xvcjp3aGl0ZTtcbn1cbmE6aG92ZXJ7XG4gIGNvbG9yOiNGRkY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/portfolio/component/contact/contact.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/portfolio/component/contact/contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data-getter.service */ "./src/app/services/data-getter.service.ts");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(data) {
        this.data = data;
        this.basicInfo = [];
        this.socialInfo = [];
        this.checkoutForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    ContactComponent.prototype.onSubmit = function (customerData) {
        // Process feedback data here
        try {
            this.feedback.updateFeedback(customerData).subscribe(function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
            console.log('Your feedback has been submitted', customerData);
            this.checkoutForm.reset();
        }
        catch (e) {
            console.log(e);
        }
    };
    ContactComponent.prototype.ngOnInit = function () {
        var about = this.contactData;
        this.basicInfo = about[0];
        this.socialInfo = about[1];
        this.feedback = this.data;
    };
    ContactComponent.ctorParameters = function () { return [
        { type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_3__["DataGetterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ContactComponent.prototype, "contactData", void 0);
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/portfolio/component/contact/contact.component.scss")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/component/experience/experience.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/portfolio/component/experience/experience.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glass_effect {\n  background-color: rgba(13, 82, 86, 0.54);\n  box-shadow: 5px -5px 13px #556e73; }\n\na:hover {\n  text-decoration: none; }\n\nul.timeline {\n  list-style-type: none;\n  position: relative; }\n\nul.timeline:before {\n  content: ' ';\n  background: #d4d9df;\n  display: inline-block;\n  position: absolute;\n  left: 20px;\n  width: 2px;\n  height: 100%;\n  z-index: 400; }\n\nul.timeline > li {\n  margin: 20px 0;\n  padding-left: 20px; }\n\nul.timeline > li:before {\n  content: ' ';\n  background: white;\n  display: inline-block;\n  position: absolute;\n  border-radius: 50%;\n  border: 3px solid #007bff;\n  left: 12px;\n  width: 20px;\n  height: 20px;\n  z-index: 400; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL3BvcnRmb2xpby9jb21wb25lbnQvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQXdDO0VBQ3hDLGlDQUFpQyxFQUFBOztBQUdyQztFQUFRLHFCQUFxQixFQUFBOztBQUM3QjtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUVoQjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vY29tcG9uZW50L2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbGFzc19lZmZlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMsIDgyLCA4NiwgMC41NCk7XG4gICAgYm94LXNoYWRvdzogNXB4IC01cHggMTNweCAjNTU2ZTczO1xuICB9XG5cbmE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOiBub25lO31cbnVsLnRpbWVsaW5lIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudWwudGltZWxpbmU6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgYmFja2dyb3VuZDogI2Q0ZDlkZjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogNDAwO1xufVxudWwudGltZWxpbmUgPiBsaSB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxudWwudGltZWxpbmUgPiBsaTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDA3YmZmO1xuICAgIGxlZnQ6IDEycHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6IDQwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/portfolio/component/experience/experience.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/portfolio/component/experience/experience.component.ts ***!
  \************************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.workExperience = [];
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        var work = this.workData;
        this.workExperience = work;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ExperienceComponent.prototype, "workData", void 0);
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/portfolio/component/experience/experience.component.scss")]
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/component/home/home.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/portfolio/component/home/home.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9jb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/portfolio/component/home/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/portfolio/component/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.designation = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var homePage = this.homeData;
        this.firstName = homePage["first-name"];
        this.secondName = homePage["second-name"];
        this.designation = homePage["designation"];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], HomeComponent.prototype, "homeData", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/portfolio/component/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/component/skills/skills.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/portfolio/component/skills/skills.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".glass_effect {\n  background-color: rgba(68, 96, 99, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Rpa2VzaC9Eb2N1bWVudHMvcHJvamVjdHMvcG9ydGZvbGlvMi9wb3Jmb2xpby9zcmMvYXBwL3BvcnRmb2xpby9jb21wb25lbnQvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUF1QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL2NvbXBvbmVudC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdsYXNzX2VmZmVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2OCwgOTYsIDk5LCAwLjUpO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/portfolio/component/skills/skills.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/portfolio/component/skills/skills.component.ts ***!
  \****************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.skills = [];
    }
    SkillsComponent.prototype.ngOnInit = function () {
        var skill = this.skillData;
        this.skills = skill;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], SkillsComponent.prototype, "skillData", void 0);
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/component/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/portfolio/component/skills/skills.component.scss")]
        })
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-getter.service */ "./src/app/services/data-getter.service.ts");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(pageDataObj) {
        this.pageDataObj = pageDataObj;
        this.title = 'porfolio';
        this.blog = false;
        this.isPageData = false;
        this.contactData = [];
        //this.getPageData();
        //this.setPageData(pageDataObj.data)
        //console.log(data.updateFeedback())
    }
    PortfolioComponent.prototype.getPageData = function () {
        var _this = this;
        this.pageDataObj.getPageData().then(function (result) {
            _this.setPageData(result);
        }, function (error) {
            console.error(error);
        });
    };
    PortfolioComponent.prototype.setPageData = function (pageObj) {
        if (pageObj != undefined) {
            this.isPageData = true;
        }
        this.pageData = pageObj;
        this.homeData = this.pageData["home-page"];
        this.aboutData = this.pageData["about-page"];
        this.workData = this.pageData["work-experience"];
        this.skills = this.pageData["skill-page"];
        this.contactData[0] = this.pageData["about-page"]["basic-info"];
        this.contactData[1] = this.pageData["about-page"]["social-info"];
    };
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getPageData();
    };
    PortfolioComponent.ctorParameters = function () { return [
        { type: _services_data_getter_service__WEBPACK_IMPORTED_MODULE_2__["DataGetterService"] }
    ]; };
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        })
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/data-getter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data-getter.service.ts ***!
  \*************************************************/
/*! exports provided: DataGetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataGetterService", function() { return DataGetterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _assets_data_source_feedback_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/data-source/feedback.json */ "./src/assets/data-source/feedback.json");
var _assets_data_source_feedback_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../assets/data-source/feedback.json */ "./src/assets/data-source/feedback.json", 1);




var DataGetterService = /** @class */ (function () {
    function DataGetterService(http) {
        this.http = http;
        this.envDetails = "http://localhost:4300";
        // this.data = SampleJson;
        this.feedback = _assets_data_source_feedback_json__WEBPACK_IMPORTED_MODULE_3___namespace;
    }
    DataGetterService.prototype.getData = function () {
        return this.data;
    };
    DataGetterService.prototype.updateFeedback = function (data) {
        return this.http.post(this.envDetails + '/server-api/updateFeedback', data);
    };
    DataGetterService.prototype.getPageData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.envDetails + '/server-api/getPageData').toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    DataGetterService.prototype.getFeedBackData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.envDetails + '/server-api/getFeedBackData').toPromise()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    DataGetterService.prototype.updateUserData = function (data) {
        return this.http.post(this.envDetails + '/server-api/updateUserData', data);
    };
    DataGetterService.prototype.ngOnInit = function () {
    };
    DataGetterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataGetterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataGetterService);
    return DataGetterService;
}());



/***/ }),

/***/ "./src/assets/data-source/feedback.json":
/*!**********************************************!*\
  !*** ./src/assets/data-source/feedback.json ***!
  \**********************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"name":"Tikesh","email":"tikeshverma2494@gmail.com","message":"Nice page you have tikesh"},{"name":"TIkesh","email":"Verma","message":"Non"},{"name":"Tikesh","email":"tikeshverma2494@gmail.com","message":"Nice"}];

/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tikesh/Documents/projects/portfolio2/porfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map