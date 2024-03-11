from flask import Flask,render_template

app = Flask("app",static_folder="static",template_folder="templates")

@app.route("/")
def main():
    return render_template("index.html")


app.run(host="0.0.0.0",port=80)