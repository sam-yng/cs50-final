from flask import Flask, redirect, render_template, request

app = Flask(__name__)

COLORS = [
    "White",
    "Black"
]


@app.route("/", methods=["POST", "GET"])
def index():

    if request.method == "POST":
        name = request.form.get("name")
        color = request.form.get("color")

        if not color:
            return render_template("index.html", color=COLORS)

        if not name:
            return render_template("index.html", color=COLORS)

        return render_template("chess.html", name=name, color=color)

    else:
        return render_template("index.html", color=COLORS)
