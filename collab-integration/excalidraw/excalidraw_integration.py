from flask import Flask, request, jsonify
import secrets 
import base64 
import os 

app = Flask(__name__) 

EXCALIDRAW_BASE_URL = os.getenv('EXCALIDRAW_BASE_URL','https://10.1.20.151:344_3' ) 


def generate_encryption_key():
    random_bytes = secrets.token_bytes(16)
    key = base64.urlsafe_b64encode(random_bytes).decode('utf-8').rstrip('=')
    return key[:22]


@app.route('/excalidraw/',methods=['POST'])
def create_excalidraw():
    data = request.form


    room_name = data.get('text', 'Collaborative Session').strip()
    user_name = data.get('user_name', 'Unknown')
    channel_name = data.get('channel_name', 'channel')


    room_id = secrets.token_hex(10)
    # collab_key = secrets.token_hex(16)
    encryption_key = generate_encryption_key()


    excalidraw_url = f"{EXCALIDRAW_BASE_URL}/#room={room_id},{encryption_key}" 

    print(excalidraw_url)


#     response = {
#             'response_type': 'in_channel', 
#             'text': f"### {room_name}\n\n\n *** A new drawing room created *** \n\n{excalidraw_url}\n\n_Created by @{user_name} in ~{channel_name}", 
#             'username': 'Excalidraw Bot'
#            }

    response = {
            'response_type': 'in_channel', 
            'username': 'Excalidraw Bot',
            'icon_emoji': ':art:',
            'text': f' **{room_name}**',
            'attachments': [{
                'fallback': f'Excalidraw room: {excalidraw_url}',
                'color': '#6965db',
                'title': 'Click here to join collaborative whiteboard ->', 
                'title_link': excalidraw_url,
                'fields': [
                        {
                        'title': 'Room url', 
                        'value': f'`{excalidraw_url}`',
                        'short': False
                        },
                        {
                        'title': 'Created by', 
                        'value': f'@{user_name}',
                        'short': True
                        },
                        {
                        'title': 'Channel', 
                        'value': f'~{channel_name}',
                        'short': True
                        }
                    ],
                'footer': 'Excalidraw Integration',
                }]
    }
    return jsonify(response), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3021)


   
