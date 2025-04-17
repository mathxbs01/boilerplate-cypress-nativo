/// <reference types="cypress"/>

//Commands Generic
import "./commands/spec/login.command";
import "./commands/spec/upload.command";
import "./commands/spec/colapse.command";
import "./commands/spec/aba.command";
//Command TOKEN
import "./commands/token/token.command";
//Commands DB
import "./commands/db/db.command";
//Commands Elements
import "./commands/elements/botao.command";
import "./commands/elements/input.command";
import "./commands/elements/link.command";
import "./commands/elements/lista.command";
import "./commands/elements/modal.command";
import "./commands/elements/menu.command";
//Services
import "./services/httpServices/http.service";
import "./services/httpServices/loginService/login.service";

import { beforeEach } from "mocha";

const sqlServer = require("cypress-sql-server");

sqlServer.loadDBCommands();

beforeEach(() => {});

afterEach(() => {});
