

export class URL {

    static async isSafe(website) {
        const endpoint = "https://api.chongluadao.vn/v1/safecheck";
        const payload = JSON.stringify({
            url: website
        });
        const headers = {
            "Content-Type": "application/json;charset=UTF-8"
        };
        const res = await fetch(endpoint, {
            method: "POST",
            headers: headers,
            body: payload
        });
        return (await res.json())["type"] == "safe";
    }
}