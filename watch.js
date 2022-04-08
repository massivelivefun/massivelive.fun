import path from "path";
import spawn from "child_process";
import { fileURLToPath } from "url";
import { readFile, writeFile, mkDir } from "fs/promises";

import browserSync from "browser-sync";
import { find } from "core-js/core/array";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const bs = browserSync.create();

function buildZola() {
    // const zolaPath = ""
    // const findZola = spawn("which", ["zola"]);

    // findZola.on('close', (code) => {
    //     if (code != 0) {
    //         bs.notify("Zola build failed");
    //         return
    //     }
    // })

    zolaPath = "/usr/local/bin/zola";

    const zola = spawn(zolaPath, [
        "build",
        "--base-url",
        "https://localhost:3000",
    ]);

    zola.stdout.on("data", (data) => process.stdout.write(data));
    zola.stdout.on("close", (code) => {
        if (code != 0) {
            bs.notify("Zola build failed");
            return;
        }
        bs.reload();
    });
}

async function init() {
    buildZola();
}

init();

bs.watch("templates/**/*.html", "sass/*.sass").on("change", () => {
    buildZola();
    bs.reload();
});

bs.init( { watch: false, open: false, server: "./public" });
