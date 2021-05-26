// @flow

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Icon, IconInviteMore } from '../../base/icons';

import { ParticipantInviteButton } from './styled';

export const InviteButton = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const openInvite = () => window.open(window.pyromaniaInviteUrl, '_blank')

    return (
        <ParticipantInviteButton
            aria-label = { t('toolbar.accessibilityLabel.invite') }
            onClick = { openInvite }>
            <Icon
                size = { 20 }
                src = { IconInviteMore } />
            <span>{t('participantsPane.actions.invite')}</span>
        </ParticipantInviteButton>
    );
};
