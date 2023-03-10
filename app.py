from flask import Flask, redirect, render_template, request

app = Flask(__name__)

COLORS = [
    "White",
    "Black"
]


@app.route("/", methods=["GET", "POST"])
def index():
    player1 = request.form.get("player1")
    player2 = request.form.get("player2")

    if request.method == "POST":
        if not player1 and not player2:
            return render_template("index.html")

    return render_template("chess.html")
