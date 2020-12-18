import React, { useCallback, useRef, useState } from 'react';
import { Animated, Easing, LayoutChangeEvent, Modal } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import palette from '../static/palette';

export interface GetchaModalProps {
  /** Modal Display State */
  visible?: boolean;
  /** Modal Title Text */
  modalTitle?: string;
  /** Modal Button Text */
  buttonTitle?: string;
  /** Modal Children Component (Content) */
  children?: React.FC | JSX.Element;
  /** Modal Button Press Event */
  onPressButton?: () => void;
}

const ModalBackground = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBlock = styled.View`
  width: 288px;
  height: auto;
  min-height: 148px;
  max-height: 492px;
  border-radius: 4px;
  background-color: ${palette.base.white};
  position: relative;
  overflow: hidden;
`;

const ModalTitle = styled.Text`
  width: 100%;
  height: 58px;
  padding: 18px 20px;

  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.5px;
`;

const ModalScrollBody = styled.ScrollView`
  width: 100%;
  height: auto;
  position: relative;
`;

const StyledGradientTop = styled(LinearGradient)`
  width: 100%;
  height: 24px;
`;

const StyledGradientBottom = styled(LinearGradient)`
  width: 100%;
  height: 24px;
`;

const ModalScrollBodyView = styled.View`
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-bottom: 72px;
`;

const ModalButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  bottom: 0;
  left: 0;
  background-color: ${palette.point.red_getcha};
`;

const ModalButtonText = styled.Text`
  color: ${palette.base.white};
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.5px;
`;

/**
 * Modal Component
 * 그라데이션은 앱에서만 확인 가능
 */

const GetchaModal = ({
  visible = false,
  modalTitle = '팝업 타이틀',
  buttonTitle = '버튼 타이틀',
  children,
  onPressButton = () => {},
}: GetchaModalProps): JSX.Element => {
  const [isMaxSize, setIsMaxSize] = useState<boolean>(false);
  const gradientAnimated = useRef(new Animated.Value(0)).current;

  const onLayoutListener = useCallback((e: LayoutChangeEvent) => {
    setIsMaxSize(e.nativeEvent.layout.height >= 492);
  }, []);

  return (
    <Modal visible={visible}>
      <ModalBackground>
        <ModalBlock onLayout={onLayoutListener}>
          <ModalTitle>{modalTitle}</ModalTitle>
          {isMaxSize && (
            <Animated.View
              style={{
                width: '100%',
                position: 'absolute',
                height: 24,
                top: 57,
                left: 0,
                zIndex: 2001,
                opacity: gradientAnimated || 0,
              }}
            >
              <StyledGradientTop
                colors={['#ffffff', 'rgba(255,255,255,0.0001)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.7 }}
              />
            </Animated.View>
          )}

          <ModalScrollBody
            showsVerticalScrollIndicator={false}
            onScrollBeginDrag={() =>
              Animated.timing(gradientAnimated, {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: true,
              }).start()
            }
            onScrollEndDrag={() =>
              Animated.timing(gradientAnimated, {
                toValue: 0,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: true,
              }).start()
            }
            scrollEventThrottle={16}
          >
            <ModalScrollBodyView>{children}</ModalScrollBodyView>
          </ModalScrollBody>
          <ModalButton onPress={onPressButton} activeOpacity={1}>
            <ModalButtonText>{buttonTitle}</ModalButtonText>
          </ModalButton>
          {isMaxSize && (
            <Animated.View
              style={{
                width: '100%',
                position: 'absolute',
                height: 24,
                bottom: 42,
                left: 0,
                zIndex: 2001,
                opacity: gradientAnimated || 0,
              }}
            >
              <StyledGradientBottom
                colors={['rgba(255,255,255,0.0001)', '#ffffff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 0.7 }}
              />
            </Animated.View>
          )}
        </ModalBlock>
      </ModalBackground>
    </Modal>
  );
};

export default GetchaModal;
