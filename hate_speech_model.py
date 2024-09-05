from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.preprocessing.sequence import pad_sequences # type: ignore
import json
app = Flask(__name__)
model = tf.keras.models.load_model('hate_speech_model.h5')
with open('tokenizer.json') as f:
    tokenizer_data = json.load(f)
    tokenizer = tf.keras.preprocessing.text.tokenizer_from_json(tokenizer_data)
MAX_SEQUENCE_LENGTH = 200

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        text = data['text']
        sequences = tokenizer.texts_to_sequences([text])
        padded_sequences = pad_sequences(sequences, maxlen=MAX_SEQUENCE_LENGTH)
        prediction = model.predict(padded_sequences)[0][0]
        return jsonify({'hatefulness': float(prediction), 'is_hateful': prediction >= 0.5})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
