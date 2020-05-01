package it.hippomeido.PPC.model;

public class CommonResponse<T> {

    private T data;

  public CommonResponse(T data) {
    this.data = data;
  }

  public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
