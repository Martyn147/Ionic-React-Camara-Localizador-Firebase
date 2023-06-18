import React, { useRef, useState } from 'react';
import { storage, database } from '../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PhotoPage.css';

const PhotoPage = () => {
  const videoRef = useRef(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [photoButtonEnabled, setPhotoButtonEnabled] = useState(false); // Variable de estado para controlar el estado del botón de tomar foto

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.log('Error opening camera:', error);
    }
  };

  const takePhoto = async () => {
    try {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const photoURL = canvas.toDataURL('image/jpeg');

      // Subir la foto a Firebase Storage
      const storageRef = storage.ref();
      const photoRef = storageRef.child('photos/photo.jpg');
      await photoRef.putString(photoURL, 'data_url');

      // Enviar la información de ubicación a Realtime Database
      const photoData = {
        latitude: latitude,
        longitude: longitude
      };
      await database.ref('photos').push(photoData);

      toast.success('Datos enviados con éxito');
    } catch (error) {
      console.log('Error al tomar la foto:', error);
    }
  };

  const showLocation = async () => {
    try {
      const position = await navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setPhotoButtonEnabled(true); // Habilitar el botón de tomar foto
        },
        (error) => {
          console.log('Error getting location:', error);
        }
      );
    } catch (error) {
      console.log('Error getting location:', error);
    }
  };

  return (
    <div className="photo-page">
      <div className="camera-container">
        <video ref={videoRef} className="camera-preview"></video>
      </div>
      <div className="button-container">
        <button className="button" onClick={openCamera}>Abrir cámara</button>
        <button className="button" onClick={showLocation}>Mostrar ubicación</button>
        <button className={`button ${!photoButtonEnabled && 'disabled'}`} onClick={takePhoto} disabled={!photoButtonEnabled}>
          Guardar Datos
        </button>
      </div>
      <div className="location-container">
        <label>Latitud: {latitude}</label>
        <label>Longitud: {longitude}</label>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PhotoPage;
