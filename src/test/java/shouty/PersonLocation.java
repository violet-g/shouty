package shouty;

public class PersonLocation {

    String name;
    int x;
    int y;

    public Coordinate getCoordinate() {
        return new Coordinate(x, y);
    }

    public PersonLocation(String name, int x, int y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}
