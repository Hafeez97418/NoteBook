const url = "http://localhost:3000/api/v1";
class NoteRoutes {
  async readnotes() {
    const authToken = await localStorage.getItem("authToken");
    const response = await fetch(`${url}/readnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    this.allnote =  await response.json();
    return this.allnote.object;
  }
  async createnotes(object) {
    const authToken = await localStorage.getItem("authToken");
    const response = await fetch(`${url}/createnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify(object),
    });
    let res = await response.json();
    return res
  }
  async updatenotes(object, Id) {
    const authToken = await localStorage.getItem("authToken");
    const response = await fetch(`${url}/updatenotes/${Id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify(object),
    });
    let res = await response.json();
    return res;
  }
  async deletenotes(Id) {
    const authToken = await localStorage.getItem("authToken");
    const response = await fetch(`${url}/deletenotes/${Id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    let res = await response.json();
    return res
  }
}


const NoteRoute = new NoteRoutes();

export {NoteRoute};