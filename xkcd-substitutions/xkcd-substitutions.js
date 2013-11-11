/* XKCD Substitutions
 * Chrome extension to implement http://xkcd.com/1288/.
 *
 * Copyright © 2013 Clay Miller (@smockled)
 * License: MIT
 */
 
/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, browser: true, devel: true */
/*global xkcd: true */

if (window.xkcd === undefined) {
    window.xkcd = {};
}

if (xkcd.ready === undefined) {
    xkcd.ready = function (fn) {
        "use strict";
        
        var DOMContentLoaded;
        
        // DOM loading in modern browsers.
        if (document.addEventListener) {
            DOMContentLoaded = function () {
                document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
                fn();
            };
            document.addEventListener("DOMContentLoaded", DOMContentLoaded, false);
            window.addEventListener("load", fn, false);
        
        // DOM loading in IE.
        } else if (document.attachEvent) {
            DOMContentLoaded = function () {
                if (document.readyState === "complete") {
                    document.detachEvent("onreadystatechange", DOMContentLoaded);
                    fn();
                }
            };
            document.attachEvent("onreadystatechange", DOMContentLoaded);
            window.attachEvent("onload", fn);
        }
        
        // DOM already loaded.
        if (document.readyState === "complete") {
            setTimeout(fn, 1);
        }
    };
}

if (xkcd.walk === undefined) {
    // Based on http://stackoverflow.com/a/5165253/1923134.
    xkcd.walk = function (node) {
        "use strict";
    
        var child;
      
        switch (node.nodeType) {
        case 1: // Element
            for (child = node.firstChild; child; child = child.nextSibling) {
                xkcd.walk(child);
            }
            break;
      
        case 3: // Text node
            node.nodeValue = node.nodeValue.replace("witness", "this dude I know");
            node.nodeValue = node.nodeValue.replace("witness", "this dude I know");
            node.nodeValue = node.nodeValue.replace("witnesses", "these dudes I know");
            node.nodeValue = node.nodeValue.replace("Witnesses", "These dudes I know");
            node.nodeValue = node.nodeValue.replace("allegedly", "kinda probably");
            node.nodeValue = node.nodeValue.replace("Allegedly", "Kinda probably");
            node.nodeValue = node.nodeValue.replace("new study", "tumblr post");
            node.nodeValue = node.nodeValue.replace("New study", "Tumblr post");
            node.nodeValue = node.nodeValue.replace("new studies", "tumblr posts");
            node.nodeValue = node.nodeValue.replace("New studies", "Tumblr posts");
            node.nodeValue = node.nodeValue.replace("rebuild", "avenge");
            node.nodeValue = node.nodeValue.replace("Rebuild", "Avenge");
            node.nodeValue = node.nodeValue.replace("rebuilding", "avenging");
            node.nodeValue = node.nodeValue.replace("Rebuilding", "Avenging");
            node.nodeValue = node.nodeValue.replace("space", "spaaace");
            node.nodeValue = node.nodeValue.replace("Space", "Spaaace");
            node.nodeValue = node.nodeValue.replace("google glasses", "virtual boys");
            node.nodeValue = node.nodeValue.replace("Google glasses", "Virtual boys");
            node.nodeValue = node.nodeValue.replace("Google Glasses", "Virtual Boys");
            node.nodeValue = node.nodeValue.replace("google glass", "virtual boy");
            node.nodeValue = node.nodeValue.replace("Google glass", "Virtual boy");
            node.nodeValue = node.nodeValue.replace("Google Glass", "Virtual Boy");
            node.nodeValue = node.nodeValue.replace("smartphones", "pokédexes");
            node.nodeValue = node.nodeValue.replace("Smartphones", "Pokédexes");
            node.nodeValue = node.nodeValue.replace("smartphone", "pokédex");
            node.nodeValue = node.nodeValue.replace("Smartphone", "Pokédex");
            node.nodeValue = node.nodeValue.replace("electric", "atomic");
            node.nodeValue = node.nodeValue.replace("Electric", "Atomic");
            node.nodeValue = node.nodeValue.replace("senator", "elf-lord");
            node.nodeValue = node.nodeValue.replace("Senator", "Elf-lord");
            node.nodeValue = node.nodeValue.replace(/([^a-zA-Z0-9]|^)car([.])/g, " cat.");
            node.nodeValue = node.nodeValue.replace(/([^a-zA-Z0-9]|^)Car([.])/g, " Cat.");
            node.nodeValue = node.nodeValue.replace(/([^a-zA-Z0-9]|^)car([^a-zA-Z0-9]|$)/g, " cat ");
            node.nodeValue = node.nodeValue.replace(/([^a-zA-Z0-9]|^)Car([^a-zA-Z0-9]|$)/g, " Cat ");
            node.nodeValue = node.nodeValue.replace(/([^a-zA-Z0-9]|^)cars([.])/g, " cats.");
            node.nodeValue = node.nodeValue.replace(/([^a-zA-Z0-9]|^)Cars([.])/g, " Cats.");
            node.nodeValue = node.nodeValue.replace(/([^a-zA-Z0-9]|^)cars([^a-zA-Z0-9]|$)/g, " cats ");
            node.nodeValue = node.nodeValue.replace(/([^a-zA-Z0-9]|^)Cars([^a-zA-Z0-9]|$)/g, " Cats ");
            node.nodeValue = node.nodeValue.replace("election", "eating contest");
            node.nodeValue = node.nodeValue.replace("Election", "Eating contest");
            node.nodeValue = node.nodeValue.replace("congressional leaders", "river spirits");
            node.nodeValue = node.nodeValue.replace("Congressional leaders", "River spirits");
            node.nodeValue = node.nodeValue.replace("homeland security", "homestar runner");
            node.nodeValue = node.nodeValue.replace("Homeland security", "Homestar runner");
            node.nodeValue = node.nodeValue.replace("Homeland Security", "Homestar Runner");
            node.nodeValue = node.nodeValue.replace("could not be reached for comment", "is guilty and everyone knows it");
            break;
        }
    };
}

xkcd.ready(function () {
    "use strict";
    xkcd.walk(document.body);
});