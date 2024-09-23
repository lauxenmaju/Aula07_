let intervalId;

        document.getElementById('Interval').addEventListener('click', function() {
            const intervalInput = document.getElementById('intervalInput').value;
            const intervalTime = parseInt(intervalInput);

            if (isNaN(intervalTime) || intervalTime <= 0) {
                alert('Por favor, insira um valor válido para o intervalo.');
                return;
            }

            intervalId = setInterval(function() {
                const output = document.getElementById('output');
                output.innerHTML += "<p>Printando usando setInterval</p>";
            }, intervalTime);
        });

        document.getElementById('pararInterval').addEventListener('click', function() {
            clearInterval(intervalId);
        });

        document.getElementById('Timeout').addEventListener('click', function() {
            const intervalInput = document.getElementById('intervalInput').value;
            const timeoutTime = parseInt(intervalInput);

            if (isNaN(timeoutTime) || timeoutTime <= 0) {
                alert('Por favor, insira um valor válido para o intervalo.');
                return;
            }

            setTimeout(function() {
                const output = document.getElementById('output');
                output.innerHTML += "<p>Printando usando setTimeout</p>";
            }, timeoutTime);
        });