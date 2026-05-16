function EEL4102_Audio_GUI
% EEL4102 Audio Signal Processing GUI
% Copy-paste ready .m file
% Uses conv() for room effects and filter() (bilinear transform) for Karaoke/Off-Vocal
% NO TOOLBOXES REQUIRED

clc; close all;

% =========================
% Stored app data
% =========================
app.audio = [];
app.fs = [];
app.t = [];
app.processed = [];
app.processedFs = [];
app.filename = "";

% Audio player objects so we can pause/stop/override playback
app.originalPlayer = [];
app.processedPlayer = [];

% =========================
% Main GUI Window
% =========================
fig = uifigure('Name','EEL 4102 Audio Signal Processing GUI', ...
    'Position',[80 40 1300 850], ...
    'Color',[0.08 0.10 0.16]);

mainGrid = uigridlayout(fig,[3 3]);
mainGrid.RowHeight = {70,'1x',95};
mainGrid.ColumnWidth = {390,'1x','1x'};
mainGrid.Padding = [15 15 15 15];
mainGrid.RowSpacing = 12;
mainGrid.ColumnSpacing = 12;
mainGrid.BackgroundColor = [0.08 0.10 0.16];

% =========================
% Title
% =========================
titleLabel = uilabel(mainGrid, ...
    'Text','Audio Signal Processing GUI', ...
    'FontSize',28, ...
    'FontWeight','bold', ...
    'FontColor',[0.95 0.95 1]);
titleLabel.Layout.Row = 1;
titleLabel.Layout.Column = [1 3];

% =========================
% Left Control Panel
% =========================
controlPanel = uipanel(mainGrid, ...
    'Title','Controls', ...
    'FontSize',16, ...
    'FontWeight','bold', ...
    'ForegroundColor',[1 1 1], ...
    'BackgroundColor',[0.12 0.15 0.23]);
controlPanel.Layout.Row = 2;
controlPanel.Layout.Column = 1;

controlGrid = uigridlayout(controlPanel,[13 2]);
controlGrid.RowHeight = {42,34,36,34,36,36,36,36,36,44,44,44,'1x'};
controlGrid.ColumnWidth = {'1x','1x'};
controlGrid.Padding = [15 15 15 15];
controlGrid.RowSpacing = 8;
controlGrid.ColumnSpacing = 8;
controlGrid.BackgroundColor = [0.12 0.15 0.23];

% =========================
% Controls
% =========================
loadButton = uibutton(controlGrid,'push', ...
    'Text','Load WAV File', ...
    'FontSize',15, ...
    'FontWeight','bold', ...
    'ButtonPushedFcn',@loadAudio);
loadButton.Layout.Row = 1;
loadButton.Layout.Column = [1 2];

fileLabel = uilabel(controlGrid, ...
    'Text','No file loaded', ...
    'FontColor',[0.85 0.85 0.9], ...
    'FontSize',12);
fileLabel.Layout.Row = 2;
fileLabel.Layout.Column = [1 2];

modeText = uilabel(controlGrid, ...
    'Text','Processing Mode', ...
    'FontColor',[1 1 1], ...
    'FontSize',14, ...
    'FontWeight','bold');
modeText.Layout.Row = 3;
modeText.Layout.Column = 1;

modeDrop = uidropdown(controlGrid, ...
    'Items',{'Cave','Cathedral','Stadium','Karaoke','Off-Vocal'}, ...
    'Value','Cave', ...
    'FontSize',14, ...
    'ValueChangedFcn',@updateHelpText);
modeDrop.Layout.Row = 3;
modeDrop.Layout.Column = 2;

paramTitle = uilabel(controlGrid, ...
    'Text','Filter Parameters', ...
    'FontColor',[1 1 1], ...
    'FontSize',14, ...
    'FontWeight','bold');
paramTitle.Layout.Row = 4;
paramTitle.Layout.Column = [1 2];

orderLabel = uilabel(controlGrid, ...
    'Text','Filter Order', ...
    'FontColor',[0.9 0.9 1]);
orderLabel.Layout.Row = 5;
orderLabel.Layout.Column = 1;

orderField = uieditfield(controlGrid,'numeric', ...
    'Value',2, ...
    'Limits',[1 6], ...
    'RoundFractionalValues','on');
orderField.Layout.Row = 5;
orderField.Layout.Column = 2;

gainLabel = uilabel(controlGrid, ...
    'Text','Gain', ...
    'FontColor',[0.9 0.9 1]);
gainLabel.Layout.Row = 6;
gainLabel.Layout.Column = 1;

gainField = uieditfield(controlGrid,'numeric', ...
    'Value',1);
gainField.Layout.Row = 6;
gainField.Layout.Column = 2;

cornerLabel = uilabel(controlGrid, ...
    'Text','Corner Freq (Hz)', ...
    'FontColor',[0.9 0.9 1]);
cornerLabel.Layout.Row = 7;
cornerLabel.Layout.Column = 1;

cornerField = uieditfield(controlGrid,'numeric', ...
    'Value',300);
cornerField.Layout.Row = 7;
cornerField.Layout.Column = 2;

centerLabel = uilabel(controlGrid, ...
    'Text','Center Freq (Hz)', ...
    'FontColor',[0.9 0.9 1]);
centerLabel.Layout.Row = 8;
centerLabel.Layout.Column = 1;

centerField = uieditfield(controlGrid,'numeric', ...
    'Value',1000);
centerField.Layout.Row = 8;
centerField.Layout.Column = 2;

bandLabel = uilabel(controlGrid, ...
    'Text','Low / High Freq (Hz)', ...
    'FontColor',[0.9 0.9 1]);
bandLabel.Layout.Row = 9;
bandLabel.Layout.Column = 1;

bandGrid = uigridlayout(controlGrid,[1 2]);
bandGrid.ColumnWidth = {'1x','1x'};
bandGrid.Padding = [0 0 0 0];
bandGrid.RowSpacing = 0;
bandGrid.ColumnSpacing = 5;
bandGrid.Layout.Row = 9;
bandGrid.Layout.Column = 2;

lowField = uieditfield(bandGrid,'numeric','Value',300);
highField = uieditfield(bandGrid,'numeric','Value',3400);

applyButton = uibutton(controlGrid,'push', ...
    'Text','Apply Processing', ...
    'FontSize',15, ...
    'FontWeight','bold', ...
    'ButtonPushedFcn',@processAudio);
applyButton.Layout.Row = 10;
applyButton.Layout.Column = [1 2];

playOriginalButton = uibutton(controlGrid,'push', ...
    'Text','Play Original', ...
    'FontSize',14, ...
    'ButtonPushedFcn',@playOriginal);
playOriginalButton.Layout.Row = 11;
playOriginalButton.Layout.Column = 1;

playProcessedButton = uibutton(controlGrid,'push', ...
    'Text','Play Processed', ...
    'FontSize',14, ...
    'ButtonPushedFcn',@playProcessed);
playProcessedButton.Layout.Row = 11;
playProcessedButton.Layout.Column = 2;

pauseButton = uibutton(controlGrid,'push', ...
    'Text','Pause Audio', ...
    'FontSize',14, ...
    'ButtonPushedFcn',@pauseAudio);
pauseButton.Layout.Row = 12;
pauseButton.Layout.Column = 1;

stopButton = uibutton(controlGrid,'push', ...
    'Text','Stop Audio', ...
    'FontSize',14, ...
    'ButtonPushedFcn',@stopAudio);
stopButton.Layout.Row = 12;
stopButton.Layout.Column = 2;

statusLabel = uilabel(controlGrid, ...
    'Text','Status: Load a WAV file to begin.', ...
    'FontColor',[0.7 0.9 1], ...
    'FontSize',13, ...
    'WordWrap','on');
statusLabel.Layout.Row = 13;
statusLabel.Layout.Column = [1 2];

% =========================
% PSD Axes
% =========================
axOriginal = uiaxes(mainGrid);
axOriginal.Layout.Row = 2;
axOriginal.Layout.Column = 2;
axOriginal.Color = [0.95 0.95 0.98];
title(axOriginal,'PSD of Original Signal');
xlabel(axOriginal,'Frequency (Hz)');
ylabel(axOriginal,'Power Estimate (dB)');
grid(axOriginal,'on');

axProcessed = uiaxes(mainGrid);
axProcessed.Layout.Row = 2;
axProcessed.Layout.Column = 3;
axProcessed.Color = [0.95 0.95 0.98];
title(axProcessed,'PSD of Processed Signal');
xlabel(axProcessed,'Frequency (Hz)');
ylabel(axProcessed,'Power Estimate (dB)');
grid(axProcessed,'on');

% =========================
% Bottom explanation panel
% =========================
helpBox = uitextarea(mainGrid, ...
    'Editable','off', ...
    'FontSize',14, ...
    'FontColor',[0.95 0.95 1], ...
    'BackgroundColor',[0.12 0.15 0.23], ...
    'Value',{'Choose a mode and press Apply Processing.'});
helpBox.Layout.Row = 3;
helpBox.Layout.Column = [1 3];

updateHelpText();

% ======================================================
% Load audio callback
% ======================================================
    function loadAudio(~,~)
        [file,path] = uigetfile({'*.wav','WAV Audio Files (*.wav)'});
        
        if isequal(file,0)
            statusLabel.Text = 'Status: No file selected.';
            return;
        end
        
        stopAudio();
        
        fullFile = fullfile(path,file);
        [x,fs] = audioread(fullFile);
        
        if size(x,2) > 1
            x = mean(x,2);
        end
        
        x = x ./ max(abs(x) + eps);
        
        app.audio = x;
        app.fs = fs;
        app.t = (0:length(x)-1)'/fs;
        app.filename = file;
        app.processed = [];
        app.processedFs = fs;
        app.originalPlayer = audioplayer(app.audio,app.fs);
        app.processedPlayer = [];
        
        fileLabel.Text = ['Loaded: ' file];
        statusLabel.Text = 'Status: Audio loaded successfully.';
        
        plotPSD(axOriginal,x,fs,'PSD of Original Signal');
        cla(axProcessed);
        title(axProcessed,'PSD of Processed Signal');
        xlabel(axProcessed,'Frequency (Hz)');
        ylabel(axProcessed,'Power Estimate (dB)');
        grid(axProcessed,'on');
    end

% ======================================================
% Process audio callback
% ======================================================
    function processAudio(~,~)
        if isempty(app.audio)
            uialert(fig,'Please load a WAV file first.','Missing Audio');
            return;
        end
        
        stopAudio();
        
        x = app.audio;
        fs = app.fs;
        mode = modeDrop.Value;
        
        switch mode
            case 'Cave'
                h = createRoomIR(fs,2.8,0.85,'cave');
                y = conv(x,h,'full');
                
            case 'Cathedral'
                h = createRoomIR(fs,4.8,0.55,'cathedral');
                y = conv(x,h,'full');
                
            case 'Stadium'
                h = createRoomIR(fs,3.8,0.70,'stadium');
                y = conv(x,h,'full');
                
            case 'Karaoke'
                y = karaokeFilterLSIM(x,fs);
                
            case 'Off-Vocal'
                y = offVocalFilterLSIM(x,fs);
        end
        
        y = real(y);
        y = y ./ max(abs(y) + eps);
        
        app.processed = y;
        app.processedFs = fs;
        app.processedPlayer = audioplayer(app.processed,app.processedFs);
        
        plotPSD(axOriginal,x,fs,'PSD of Original Signal');
        plotPSD(axProcessed,y,fs,['PSD of Processed Signal: ' mode]);
        
        statusLabel.Text = ['Status: Applied ' mode ' processing.'];
    end

% ======================================================
% Play original audio
% ======================================================
    function playOriginal(~,~)
        if isempty(app.audio)
            uialert(fig,'Load audio first.','Missing Audio');
            return;
        end
        
        if ~isempty(app.processedPlayer)
            stop(app.processedPlayer);
        end
        
        app.originalPlayer = audioplayer(app.audio,app.fs);
        play(app.originalPlayer);
        
        statusLabel.Text = 'Status: Playing original audio.';
    end

% ======================================================
% Play processed audio
% ======================================================
    function playProcessed(~,~)
        if isempty(app.processed)
            uialert(fig,'Apply processing first.','Missing Processed Audio');
            return;
        end
        
        if ~isempty(app.originalPlayer)
            stop(app.originalPlayer);
        end
        
        app.processedPlayer = audioplayer(app.processed,app.processedFs);
        play(app.processedPlayer);
        
        statusLabel.Text = 'Status: Playing processed audio.';
    end

% ======================================================
% Pause audio
% Store CurrentSample, stop, then resume from that position.
% ======================================================
    function pauseAudio(~,~)
        pausedSomething = false;

        if ~isempty(app.originalPlayer) && isplaying(app.originalPlayer)
            app.origPauseSample = get(app.originalPlayer,'CurrentSample');
            stop(app.originalPlayer);
            pauseButton.Text = 'Resume Audio';
            pauseButton.ButtonPushedFcn = @resumeAudio;
            pausedSomething = true;
        end

        if ~isempty(app.processedPlayer) && isplaying(app.processedPlayer)
            app.procPauseSample = get(app.processedPlayer,'CurrentSample');
            stop(app.processedPlayer);
            pauseButton.Text = 'Resume Audio';
            pauseButton.ButtonPushedFcn = @resumeAudio;
            pausedSomething = true;
        end

        if pausedSomething
            statusLabel.Text = 'Status: Audio paused.';
        else
            statusLabel.Text = 'Status: No audio is currently playing.';
        end
    end

% ======================================================
% Resume audio from stored sample position
% ======================================================
    function resumeAudio(~,~)
        if isfield(app,'origPauseSample') && ~isempty(app.origPauseSample)
            app.originalPlayer = audioplayer(app.audio, app.fs);
            play(app.originalPlayer, app.origPauseSample);
            app.origPauseSample = [];
            statusLabel.Text = 'Status: Resumed original audio.';
        elseif isfield(app,'procPauseSample') && ~isempty(app.procPauseSample)
            app.processedPlayer = audioplayer(app.processed, app.processedFs);
            play(app.processedPlayer, app.procPauseSample);
            app.procPauseSample = [];
            statusLabel.Text = 'Status: Resumed processed audio.';
        end
        pauseButton.Text = 'Pause Audio';
        pauseButton.ButtonPushedFcn = @pauseAudio;
    end

% ======================================================
% Stop audio
% ======================================================
    function stopAudio(~,~)
        if ~isempty(app.originalPlayer)
            stop(app.originalPlayer);
        end
        
        if ~isempty(app.processedPlayer)
            stop(app.processedPlayer);
        end
        
        if exist('statusLabel','var')
            statusLabel.Text = 'Status: Audio stopped.';
        end
    end

% ======================================================
% Update help text
% ======================================================
    function updateHelpText(~,~)
        mode = modeDrop.Value;
        
        switch mode
            case 'Cave'
                helpBox.Value = {
                    'Cave Mode:'
                    'This uses conv() with a synthetic impulse response.'
                    'Convolution means the original sound is being passed through a room fingerprint.'
                    'A cave effect has noticeable reflections and echo.'
                    };
                
            case 'Cathedral'
                helpBox.Value = {
                    'Cathedral Mode:'
                    'This uses conv() with a longer impulse response.'
                    'The longer decay makes the sound feel larger and more spacious.'
                    'You should hear a longer reverb tail than Cave mode.'
                    };
                
            case 'Stadium'
                helpBox.Value = {
                    'Stadium Mode:'
                    'This uses conv() with delayed reflection spikes.'
                    'A stadium sound has larger delayed echoes because reflections travel farther.'
                    };
                
            case 'Karaoke'
                helpBox.Value = {
                    'Karaoke Mode:'
                    'This uses filter() with a notch (band-reject) design via bilinear transform.'
                    'The filter reduces the selected vocal frequency band.'
                    'Default vocal band is about 300 Hz to 3400 Hz.'
                    };
                
            case 'Off-Vocal'
                helpBox.Value = {
                    'Off-Vocal Mode:'
                    'This uses filter() with a band-pass design via bilinear transform.'
                    'Instead of removing vocals, it emphasizes the vocal range.'
                    'This is the opposite idea of Karaoke mode.'
                    };
        end
    end

% ======================================================
% Synthetic room impulse response
% ======================================================
    function h = createRoomIR(fs,reverbTime,decayAmount,roomType)
        n = round(reverbTime*fs);
        t = (0:n-1)'/fs;
        
        noise = randn(n,1);
        envelope = exp(-decayAmount*t);
        h = noise .* envelope;
        
        h(1) = h(1) + 1;
        
        switch roomType
            case 'cave'
                delays = [0.12 0.28 0.47];
                amps = [0.55 0.35 0.22];
            case 'cathedral'
                delays = [0.18 0.42 0.75 1.15];
                amps = [0.65 0.45 0.32 0.20];
            case 'stadium'
                delays = [0.25 0.55 0.95 1.45];
                amps = [0.75 0.50 0.35 0.25];
        end
        
        for k = 1:length(delays)
            idx = round(delays(k)*fs);
            if idx <= length(h)
                h(idx) = h(idx) + amps(k);
            end
        end
        
        h = h ./ max(abs(h) + eps);
    end

% ======================================================
% Karaoke filter — notch (band-reject) using lsim()
% H(s) = (s^2 + w0^2) / (s^2 + Bw*s + w0^2)
% Uses: tf() and lsim() — Control System Toolbox
% ======================================================
    function y = karaokeFilterLSIM(x,fs)
        filterOrder = orderField.Value;
        gain        = gainField.Value;
        lowFreq     = max(20,  lowField.Value);
        highFreq    = min(fs/2 - 1, highField.Value);
        centerFreq  = centerField.Value;

        if highFreq <= lowFreq, highFreq = lowFreq + 500; end
        if centerFreq <= 0,     centerFreq = sqrt(lowFreq * highFreq); end

        w0 = 2*pi*centerFreq;           % center frequency (rad/s)
        Bw = 2*pi*(highFreq - lowFreq); % bandwidth (rad/s)

        % Notch transfer function numerator and denominator
        num = [1,  0,  w0^2];
        den = [1,  Bw, w0^2];

        sys = tf(num, den);
        t   = (0:length(x)-1)' / fs;
        x   = x(:);

        y = lsim(sys, x, t);

        for k = 2:filterOrder
            y = lsim(sys, y, t(1:length(y)));
        end

        y = gain * real(y);
    end

% ======================================================
% Off-Vocal filter — band-pass using lsim()
% H(s) = (Bw*s) / (s^2 + Bw*s + w0^2)
% Uses: tf() and lsim() — Control System Toolbox
% ======================================================

    function y = offVocalFilterLSIM(x,fs)
        filterOrder = orderField.Value;
        gain        = gainField.Value;
        lowFreq     = max(20,  lowField.Value);
        highFreq    = min(fs/2 - 1, highField.Value);
        centerFreq  = centerField.Value;

        if highFreq <= lowFreq, highFreq = lowFreq + 500; end
        if centerFreq <= 0,     centerFreq = sqrt(lowFreq * highFreq); end

        w0 = 2*pi*centerFreq;           % center frequency (rad/s)
        Bw = 2*pi*(highFreq - lowFreq); % bandwidth (rad/s)

        % Band-pass transfer function numerator and denominator
        num = [0,  Bw, 0];
        den = [1,  Bw, w0^2];

        sys = tf(num, den);
        t   = (0:length(x)-1)' / fs;
        x   = x(:);

        y = lsim(sys, x, t);

        for k = 2:filterOrder
            y = lsim(sys, y, t(1:length(y)));
        end

        y = gain * real(y);
    end

% ======================================================
% PSD plotting using FFT
% ======================================================
    function plotPSD(ax,x,fs,plotTitle)
        cla(ax);
        
        x = x(:);
        x = x - mean(x);
        
        N = length(x);
        X = fft(x);
        
        P2 = (abs(X)/N).^2;
        P1 = P2(1:floor(N/2)+1);
        f = fs*(0:floor(N/2))/N;
        
        PSD_dB = 10*log10(P1 + eps);
        
        plot(ax,f,PSD_dB,'LineWidth',1.4);
        title(ax,plotTitle);
        xlabel(ax,'Frequency (Hz)');
        ylabel(ax,'Power Estimate (dB)');
        grid(ax,'on');
        xlim(ax,[0 fs/2]);
    end

end
