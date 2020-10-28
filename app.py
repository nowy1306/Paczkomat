from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/sender/sign-up')
def register():
    return render_template("register.html")
    
    
if __name__ == '__main__':
    app.run()