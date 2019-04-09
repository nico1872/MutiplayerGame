using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SocketIO;

public class Network : MonoBehaviour
{

    static SocketIOComponent socket;

    public GameObject playerPrefab;
    // Start is called before the first frame update
    void Start()
    {
        socket = GetComponent<SocketIOComponent>();
        socket.On("open", OnConnected);

        socket.On("spawn",OnSpawned);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnConnected(SocketIOEvent e)
    {
        print("HasConnect");

        socket.Emit("move");
    }
    void OnSpawned(SocketIOEvent e)
    {
        print("spawned");

        Instantiate(playerPrefab,new Vector3(0,3,0),transform.rotation);
    }
}
