const ErrorScreen = () => {
  return (
    <div className="w-[100vw] h-[90vh] flex justify-center items-center">
      <div className="flex flex-col rounded-md border-black border-solid border-2 pt-4 shadow-md shadow-black">
        <h3 className="font-bold text-center text-red-600">Error</h3>
        <p className="mx-10 mb-4">Attendi qualche minuto prima di riprovare.</p>
        <div className="border-t-2 border-slate-400 border-solid w-[100%] text-center p-2">
          <p className="text-blue-400 font-bold">
            Controlla che tu sia connesso a internet
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
