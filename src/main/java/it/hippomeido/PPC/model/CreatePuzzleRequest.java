package it.hippomeido.PPC.model;

import org.springframework.stereotype.Component;

@Component
public class CreatePuzzleRequest {

    private int col;
    private int row;

    private String title;
    private int page;

    public int getCol() {
        return col;
    }

    public void setCol(int col) {
        this.col = col;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
