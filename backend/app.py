import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input, decode_predictions
from tensorflow.keras.preprocessing import image

app = Flask(__name__)
CORS(app)

# Load the MobileNetV2 model
model = MobileNetV2(weights='imagenet')

def classify_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)

    predictions = model.predict(img_array)
    decoded_predictions = decode_predictions(predictions, top=1)[0]

    # Assuming MobileNetV2 model returns predictions in the format ('class_label', 'class_name', confidence)
    class_label, class_name, confidence = decoded_predictions[0]

    return {"class": class_name, "confidence": float(confidence)}

@app.route('/classify', methods=['POST'])
def classify_image_route():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files['image']
    
    # Save the image to a temporary file
    img_path = "temp_image.jpg"
    image_file.save(img_path)

    try:
        result = classify_image(img_path)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        # Delete the temporary image file
        if os.path.exists(img_path):
            os.remove(img_path)

if __name__ == '__main__':
    app.run(debug=True,port=3001)
