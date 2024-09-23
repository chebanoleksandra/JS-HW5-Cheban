//1
function Check(a, b) {
    if (a % 2 == 0 && b % 2 == 0) {
        return a * b;
    }
    else if (a & 2 != 0 && b % 2 != 0) {
        return a + b;
    }
    else {
        if (a % 2 != 0) {
            return a;
        }
        else {
            return b;
        }
    }
}

document.write(Check(2, 4) + "<br />");
document.write(Check(3, 1) + "<br />");
document.write(Check(1, 2) + "<br />");
document.write(Check(2, 1) + "<br />");

//2
function Rectangle(aX, aY, bX, bY, cX, cY, dX, dY) {
    if (aY == bY && aX == dX && bX == cX && cY == dY) {
        document.write("Да, точки (" + aX + ", " + aY + "), (" + bX + ", " + bY + "), (" + cX + ", " + cY + "), (" + dX + ", " + dY + ") образуют прямоугольник" + "<br />");
    }
    else {
        document.write("Нет, точки (" + aX + ", " + aY + "), (" + bX + ", " + bY + "), (" + cX + ", " + cY + "), (" + dX + ", " + dY + ") не образуют прямоугольник" + "<br />");
    }
}

Rectangle(2, 4, 5, 4, 5, 1, 2, 1);
Rectangle(2, 4, 3, 4, 5, 1, 2, 1);