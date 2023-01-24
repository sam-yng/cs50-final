from flask import Flask, redirect, render_template, request

app = Flask(__name__)

COLORS = [
    "White",
    "Black"
]


@app.route("/", methods=["POST", "GET"])
def index():

    if request.method == "POST":
        player1 = request.form.get("player1")
        player2 = request.form.get("player2")

        if not player1:
            return render_template("index.html")

        if not player2:
            return render_template("index.html")

        return render_template("chess.html", palyer1=player1, player2=player2)

    else:
        return render_template("chess.html")
